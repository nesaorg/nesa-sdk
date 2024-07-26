const {
    describe,
    it,
} = require('node:test');
const assert = require('node:assert');
const {
    ChatClient
} = require('../dist/index.js')
const crypto = require("crypto");
const {
    split
} = require('./test-dependence.js')
const axios = require('axios');
const modelArray = [
    'Gpt-3.5-Turbo-0125',
    'Claude-3-Opus-20240229',
    'Gpt-4o',
    'Gpt-4-Turbo-Preview',
    'Meta-Llama/Meta-Llama-3-8B-Instruct',
    'Meta-Llama/Meta-Llama-3-70B-Instruct',
    'Orenguteng/Llama-3-8B-Lexi-Uncensored',
    'Mistralai/Mixtral-8x7B-Instruct-V0.1'
]
const userId = '662e6d38ee20b2417793f42a'
const privateKey = '034d040ae596872c07514f42b269e332cfa4058311255be0ac9d20e32d952f14'
const defaultChainInfo = {
    chainId: 'nesa-testnet-3',
    chainName: 'Nesa Testnet',
    chainSymbolImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/chain.png",
    rest: 'https://lcd.test.nesa.ai',
    rpc: 'https://rpc.test.nesa.ai',
    nodeProvider: {
        name: "Nesa",
        email: "dev@nesa.ai",
        website: "https://nesa.ai/",
    },

    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "nesa",
        bech32PrefixAccPub: "nesa" + "pub",
        bech32PrefixValAddr: "nesa" + "valoper",
        bech32PrefixValPub: "nesa" + "valoperpub",
        bech32PrefixConsAddr: "nesa" + "valcons",
        bech32PrefixConsPub: "nesa" + "valconspub",
    },
    currencies: [{
        coinDenom: "NES",
        coinMinimalDenom: "unes",
        coinDecimals: 6,
        coinGeckoId: "nesa",
        coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
    }, ],
    feeCurrencies: [{
        coinDenom: "NES",
        coinMinimalDenom: "unes",
        coinDecimals: 6,
        coinGeckoId: "nesa",
        coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
        gasPriceStep: {
            low: 0.01,
            average: 0.02,
            high: 0.1,
        },
    }, ],
    stakeCurrency: {
        coinDenom: "NES",
        coinMinimalDenom: "unes",
        coinDecimals: 6,
        coinGeckoId: "nesa",
        coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
        gasPriceStep: {},
        features: ["cosmwasm"],
    },
};

describe('Request session success', () => {
    const datas = []
    const chatSatusData = []
    it('should return the correct requestSession result', async () => {
        const requestModel = modelArray[0]
        let loadedAmount = 0
        const ChatClientUtils = new ChatClient({
            chainInfo: defaultChainInfo,
            privateKey: privateKey,
            modelName: requestModel,
        })
        const result = new Promise((resolve, reject) => {
            ChatClientUtils.requestChatStatus()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        chatSatusData.push(msg)
                        if (msg.code === 304) {
                            loadedAmount += 1
                            if (loadedAmount === 2) {
                                resolve(chatSatusData)
                            }
                        }
                    });
                    dataStream.on("end", () => {
                        reject()
                    })
                })
                .catch(err => {
                    reject(err)
                })
            ChatClientUtils.requestSession()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        datas.push(msg)
                        if (msg.code > 310) {
                            reject(msg)
                        }
                    });
                    dataStream.on("end", () => {
                        loadedAmount += 1
                        if (loadedAmount === 2) {
                            resolve(datas)
                        }
                    })
                })
                .catch(err => {
                    reject(err)
                })
        })
        await result
        ChatClientUtils.requestCloseHeartbeat()
        assert.equal(datas.length, 1);
        assert.equal(datas[0].code, 200);
        assert.equal(chatSatusData.length, 5);
        assert.equal(chatSatusData[0].code, 300);
        assert.equal(chatSatusData[1].code, 301);
        assert.equal(chatSatusData[2].code, 302);
        assert.equal(chatSatusData[3].code, 303);
        assert.equal(chatSatusData[4].code, 304);
    });
})

describe('Request session', () => {
    const datas = []
    const chatSatusData = []
    it('should return insufficient balance', async () => {
        let loadedAmount = 0
        const requestModel = modelArray[0]
        const ChatClientUtils = new ChatClient({
            chainInfo: defaultChainInfo,
            privateKey: privateKey,
            modelName: requestModel,
            lockAmount: '100000000000000000000'
        })
        const result = new Promise((resolve, reject) => {
            ChatClientUtils.requestChatStatus()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        chatSatusData.push(msg)
                        if (msg.code === 302) {
                            loadedAmount += 1
                            if (loadedAmount === 2) {
                                resolve(chatSatusData)
                            }
                        }
                    });
                    dataStream.on("end", () => {
                        reject()
                    })
                })
                .catch(err => {
                    reject(err)
                })
            ChatClientUtils.requestSession()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        datas.push(msg)
                    });
                    dataStream.on("end", () => {
                        loadedAmount += 1
                        if (loadedAmount === 2) {
                            resolve(datas)
                        }
                    })
                })
                .catch(err => {
                    reject(err)
                })
        })
        await result
        ChatClientUtils.requestCloseHeartbeat()
        assert.equal(datas.length, 2);
        assert.equal(datas[0].code, 200);
        assert.equal(datas[1].code, 318);
        assert.equal(datas[1].message.includes('insufficient coin balance'), true)
        assert.equal(chatSatusData.length, 3);
        assert.equal(chatSatusData[0].code, 300);
        assert.equal(chatSatusData[1].code, 301);
        assert.equal(chatSatusData[2].code, 302);
    });
})

describe('Request chat array', () => {
    const encryptMessage = async (message, userId) => {
        const encrypt = (query, key, iv) => {
            const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
            let encrypted = cipher.update(query, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            const authTag = cipher.getAuthTag().toString('hex');
            return {
                authTag,
                encrypted
            };
        }
        const key = crypto.randomBytes(32); // 256-bit key
        const messageIv = crypto.randomBytes(12); // 96-bit IV for GCM

        // Step 2: Encrypt Message
        const messageEncrypted = encrypt(message, key, messageIv);
        const DKMS_SERVER_NAMES = ['A', 'B', 'C'];
        const NUM_SHARES = DKMS_SERVER_NAMES.length;
        // Step 3: Split encryption key into shares
        const keyShares = split(key, {
            shares: NUM_SHARES,
            threshold: Math.floor(NUM_SHARES / 2) + 1,
        });

        const storeShares = async ({
            shares,
            userId
        }) => {
            const promises = DKMS_SERVER_NAMES.map((serverName, index) => {
                return axios.post(
                    `https://dkms-${serverName.toLocaleLowerCase()}-test.nesa.ai/secrets`, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        share: shares[index],
                        userId
                    }
                );
            });
            const results = await Promise.all(promises);
            return DKMS_SERVER_NAMES.reduce((acc, serverName, i) => {
                acc[serverName] = results[i].data?.keyId;
                return acc;
            }, {});
        }

        // Step 4: Store shares
        const storeResults = await storeShares({
            shares: keyShares.map((k) => k.toString('hex', 2)),
            userId,
        });
        const encryptionParams = {
            keyShares: storeResults,
            messageIv: messageIv.toString('hex', 2),
        };
        return {
            encryptionParams,
            messageEncrypted
        };
    }
    for (let i = 0; i < modelArray.length; i++) {
        it('should return chat message', async () => {
            const requestModel = modelArray[i]
            const ChatClientUtils = new ChatClient({
                chainInfo: defaultChainInfo,
                privateKey: privateKey,
                modelName: requestModel,
            })
            const datas = []
            const chatStausData = []
            const requestSessionChat = new Promise((resolve, reject) => {
                let loadedAmount = 0
                ChatClientUtils.requestChatStatus()
                    .then((dataStream) => {
                        dataStream.on("data", (msg) => {
                            chatStausData.push(msg)
                            if (msg.code === 304) {
                                loadedAmount += 1
                                if (loadedAmount === 2) {
                                    resolve(chatStausData)
                                }
                            }
                        });
                        dataStream.on("end", () => {
                            reject()
                        })
                    })
                    .catch(err => {
                        reject(err)
                    })
                ChatClientUtils.requestSession()
                    .then((dataStream) => {
                        dataStream.on("data", (msg) => {
                            datas.push(msg)
                            if (msg.code > 310) {
                                reject()
                            }
                        });
                        dataStream.on("end", () => {
                            loadedAmount += 1
                            if (loadedAmount === 2) {
                                resolve(datas)
                            }
                        })
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            await requestSessionChat
            assert(chatStausData[chatStausData.length - 1].code === 304)
            const chatDatas = []
            const nextChatStausData = chatStausData
            const requestChat = new Promise(async (resolve, reject) => {
                let loadedAmount = 0
                ChatClientUtils.requestChatStatus()
                    .then((dataStream) => {
                        dataStream.on("data", (msg) => {
                            nextChatStausData.push(msg)
                            if (msg.code === 307) {
                                loadedAmount += 1
                                if (loadedAmount === 2) {
                                    resolve(nextChatStausData)
                                }
                            }
                        });
                        dataStream.on("end", () => {
                            reject()
                        })
                    })
                    .catch(err => {
                        reject(err)
                    })
                const chatRequest = {
                    messages: [{
                        role: 'user',
                        content: 'hi'
                    }],
                    model: requestModel,
                    session_id: JSON.stringify({
                        api_key: undefined,
                        session_id: null,
                        user_id: userId,
                    }, ),
                }
                const {
                    encryptionParams,
                    messageEncrypted: chatRequestEncrypted
                } = await encryptMessage(JSON.stringify(chatRequest), userId)
                const enc = {
                    params: encryptionParams,
                    request: chatRequestEncrypted,
                    userId,
                };
                ChatClientUtils.requestChat({
                        enc,
                        model: requestModel,
                        ...chatRequest
                    })
                    .then((dataStream) => {
                        dataStream.on("data", (msg) => {
                            chatDatas.push(msg)
                            if (msg.code === 201 ||
                                msg.code === 202 ||
                                msg.code === 204 ||
                                msg.code === 205
                            ) {
                                resolve()
                            }
                        });
                        dataStream.on("end", () => {
                            resolve()
                        })
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
            await requestChat
            ChatClientUtils.requestCloseHeartbeat()
            assert(chatDatas.length > 0)
            assert(chatDatas[chatDatas.length - 1].code === 203)
            assert(nextChatStausData.length === 9)
        });
    }
})

describe('Request chat insufficient amount', () => {
    const encryptMessage = async (message, userId) => {
        const encrypt = (query, key, iv) => {
            const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
            let encrypted = cipher.update(query, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            const authTag = cipher.getAuthTag().toString('hex');
            return {
                authTag,
                encrypted
            };
        }
        const key = crypto.randomBytes(32); // 256-bit key
        const messageIv = crypto.randomBytes(12); // 96-bit IV for GCM

        // Step 2: Encrypt Message
        const messageEncrypted = encrypt(message, key, messageIv);
        const DKMS_SERVER_NAMES = ['A', 'B', 'C'];
        const NUM_SHARES = DKMS_SERVER_NAMES.length;
        // Step 3: Split encryption key into shares
        const keyShares = split(key, {
            shares: NUM_SHARES,
            threshold: Math.floor(NUM_SHARES / 2) + 1,
        });

        const storeShares = async ({
            shares,
            userId
        }) => {
            const promises = DKMS_SERVER_NAMES.map((serverName, index) => {
                return axios.post(
                    `https://dkms-${serverName.toLocaleLowerCase()}-test.nesa.ai/secrets`, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        share: shares[index],
                        userId
                    }
                );
            });
            const results = await Promise.all(promises);
            return DKMS_SERVER_NAMES.reduce((acc, serverName, i) => {
                acc[serverName] = results[i].data?.keyId;
                return acc;
            }, {});
        }

        // Step 4: Store shares
        const storeResults = await storeShares({
            shares: keyShares.map((k) => k.toString('hex', 2)),
            userId,
        });
        const encryptionParams = {
            keyShares: storeResults,
            messageIv: messageIv.toString('hex', 2),
        };
        return {
            encryptionParams,
            messageEncrypted
        };
    }
    it('should return insufficient amount', async () => {
        const requestModel = modelArray[0]
        const ChatClientUtils = new ChatClient({
            chainInfo: defaultChainInfo,
            privateKey: privateKey,
            modelName: requestModel,
            lockAmount: '2000',
            singlePaymentAmount: '1000'
        })
        const datas = []
        const chatStausData = []
        const requestSessionChat = new Promise((resolve, reject) => {
            let loadedAmount = 0
            ChatClientUtils.requestChatStatus()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        chatStausData.push(msg)
                        if (msg.code === 304) {
                            loadedAmount += 1
                            if (loadedAmount === 2) {
                                resolve(chatStausData)
                            }
                        }
                    });
                    dataStream.on("end", () => {
                        reject()
                    })
                })
                .catch(err => {
                    reject(err)
                })
            ChatClientUtils.requestSession()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        datas.push(msg)
                        if (msg.code > 310) {
                            reject()
                        }
                    });
                    dataStream.on("end", () => {
                        loadedAmount += 1
                        if (loadedAmount === 2) {
                            resolve(datas)
                        }
                    })
                })
                .catch(err => {
                    reject(err)
                })
        })
        await requestSessionChat
        assert(chatStausData[chatStausData.length - 1].code === 304)
        const chatDatas = []
        const nextChatStausData = []
        const requestChat = new Promise(async (resolve, reject) => {
            let loadedAmount = 0
            ChatClientUtils.requestChatStatus()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        nextChatStausData.push(msg)
                        if (msg.code === 307) {
                            loadedAmount += 1
                            if (loadedAmount === 2) {
                                resolve()
                            }
                        }
                    });
                    dataStream.on("end", () => {
                        reject()
                    })
                })
                .catch(err => {
                    reject(err)
                })
            const chatRequest = {
                messages: [{
                    role: 'user',
                    content: 'Please introduce js with 100 words'
                }],
                model: requestModel,
                session_id: JSON.stringify({
                    api_key: undefined,
                    session_id: null,
                    user_id: userId,
                }, ),
            }
            const {
                encryptionParams,
                messageEncrypted: chatRequestEncrypted
            } = await encryptMessage(JSON.stringify(chatRequest), userId)
            const enc = {
                params: encryptionParams,
                request: chatRequestEncrypted,
                userId,
            };
            ChatClientUtils.requestChat({
                    enc,
                    model: requestModel,
                    ...chatRequest
                })
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        chatDatas.push(msg)
                    });
                    dataStream.on("end", () => {
                        loadedAmount += 1
                        if (loadedAmount === 2) {
                            resolve()
                        }
                    })
                })
                .catch(err => {
                    reject(err)
                })
        })
        await requestChat
        ChatClientUtils.requestCloseHeartbeat()
        assert(chatDatas.length > 0)
        assert(chatDatas[chatDatas.length - 1].code === 205)
        assert(nextChatStausData[nextChatStausData.length - 1].code === 307)
    });
})

describe('Request session', () => {
    it('should return transactionHash timely', async () => {
        const requestModel = modelArray[0]
        const ChatClientUtils = new ChatClient({
            chainInfo: defaultChainInfo,
            privateKey: privateKey,
            modelName: requestModel,
        })
        // Preload chain params etc.
        await new Promise(resolve => setTimeout(resolve, 5000));
        const datas = []
        const chatStausData = []
        let beginRequestSessionTime = 0
        let getTransactionHashTime = 0
        const requestSessionChat = new Promise((resolve, reject) => {
            let loadedAmount = 0
            ChatClientUtils.requestChatStatus()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        chatStausData.push(msg)
                        if (msg.code === 304) {
                            loadedAmount += 1
                            if (loadedAmount === 2) {
                                resolve(chatStausData)
                            }
                        }
                    });
                    dataStream.on("end", () => {
                        reject()
                    })
                })
                .catch(err => {
                    reject(err)
                })
            beginRequestSessionTime = new Date().getTime()
            ChatClientUtils.requestSession()
                .then((dataStream) => {
                    dataStream.on("data", (msg) => {
                        datas.push(msg)
                        if (msg.code === 200) {
                            getTransactionHashTime = new Date().getTime()
                        }
                        if (msg.code > 310) {
                            reject()
                        }
                    });
                    dataStream.on("end", () => {
                        loadedAmount += 1
                        if (loadedAmount === 2) {
                            resolve(datas)
                        }
                    })
                })
                .catch(err => {
                    reject(err)
                })
        })
        await requestSessionChat
        ChatClientUtils.requestCloseHeartbeat()
        assert(chatStausData[chatStausData.length - 1].code === 304)
        assert((getTransactionHashTime - beginRequestSessionTime) < 2000)
    })
})