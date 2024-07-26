const { exit } = require('process')
const { ChatClient } = require('nesa.js')
const readline = require("node:readline");

const address = 'nesa143gwwdtxaxspv5rqesyxnza8sxd9gjkyvapc7f'
const privateKey = 'c2769207c112c66a980dc50b74775e7a3cdb5e37a79884ebed2ae50417a7e237'
const requestSessionModel = 'meta-llama/Meta-Llama-3-70B'
const requestChatModel = 'meta-llama/Meta-Llama-3-70B'

const nesaTestChain = {
    chainId: 'nesa-testnet-3',
    chainName: 'Nesa Testnet',
    chainSymbolImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/chain.png",
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
    currencies: [
        {
            coinDenom: "NES",
            coinMinimalDenom: "unes",
            coinDecimals: 6,
            coinGeckoId: "nesa",
            coinImageUrl:
                "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "NES",
            coinMinimalDenom: "unes",
            coinDecimals: 6,
            coinGeckoId: "nesa",
            coinImageUrl:
                "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
            gasPriceStep: {
                low: 0.01,
                average: 0.02,
                high: 0.1,
            },
        },
    ],
    stakeCurrency: {
        coinDenom: "NES",
        coinMinimalDenom: "unes",
        coinDecimals: 6,
        coinGeckoId: "nesa",
        coinImageUrl:
            "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
        gasPriceStep: {},
        features: ["cosmwasm"],
    },
}

const ChatClientUtils = new ChatClient({
    chainInfo: nesaTestChain,   //  chain info
    privateKey: privateKey,     //  private key
    modelName: requestSessionModel, // model name
})
const readlineClient = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const requestSession = () => {
    ChatClientUtils.requestSession()
        .then((dataStream) => {
            dataStream.on("data", (msg) => {
                console.warn("PROGRESS: ", msg);
                if (msg?.code === 304) {
                    readlineClient.question("Please input question: \n", (question) => {
                        console.log(`You question is: ${question}`);
                        requestChat(question)
                    });
                }
            });
            dataStream.on("end", () => {
                // exit()
            });
        })
        .catch((error) => {
            console.log('error: ', error)
        })
}

const requestChat = (question) => {
    const messageData = {
        model: requestChatModel,
        messages: [{ role: "user", content: question }],
        stream: true,
    };
    ChatClientUtils.requestChat(messageData)
        .then((dataStream) => {
            let answer = ''
            dataStream.on("data", (msg) => {
                if (msg?.code === 200) {
                    answer = answer + msg?.message
                    console.log('Answer: ', answer)
                }
                if (msg?.code === 307) {
                    console.log(msg)
                    readlineClient.question("Please input question again: \n", (question) => {
                        console.log(`You question is: ${question}`);
                        requestChat(question)
                    });
                }
            });
            dataStream.on("end", () => {
                // console.log("Stream ended");
                // exit()
            });
        })
        .catch((error) => {
            console.log('error: ', error)
            exit()
        })
}

requestSession()