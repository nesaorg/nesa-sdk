# NESA SDK In NODEJS

The SDK is designed to be integrated into frontend projects, allowing seamless integration with the Keplr wallet extension. It enables users to perform signing and messaging functionalities within the frontend project.

### Install & Usage

```
npm install
node devnet.ts
```

### Compile Protocol Buffer 

```sh
npm run codegen # proto ==> ts, Generate .ts files into ./src/codec
```

### Init SDK

```
const { ChatClient } = require('nesa.js')
const ChatUtils = new ChatClient({
  modelName: "",  //  model name
  privateKey: "",   //  private key
  lockAmount: "", //  optional. lock amount , default 1000
  singleLockUpAmount: ""  //  optional. Number of single signed payment , default 100
  lowBalance: ""  //  optional. The remaining unused amount of payment. If unused payment is lower than this value, payment will be regenerated., default 10
})
```

### Get instructions about chat progress

The SDK will return a total of 7 statuses, see the table below. The specific status will be returned through the interfaces **requestSession** and **requestChat**, the specific status is as follows:

| Code | Message                                | Remark                                                                                                           | Api                |
| ---- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------ |
| -    | Connecting to Nesa chain               | Default step. The initialization SDK displays this state by default. The SDK will not output this step.(Default) | -                  |
| 301  | Connected to Nesa chain                | Nesa chain is connected, and returns after the chain parameters are initialized. (After click 'start inference') | **requestSession** |
| 302  | Choosing an inference validator        | Signature successful, Choosing an inference validator                                                            | **requestSession** |
| 303  | Connecting to the validator            | Connecting to the validator                                                                                      | **requestSession** |
| 304  | Waiting for query                      | Waiting for query                                                                                                | **requestSession** |
| 305  | Conducting inference                   | Conducting inference (After click 'start query')                                                                 | **requestChat**    |
| 306  | Receiving responses                    | Receiving responses                                                                                              | **requestChat**    |
| 307  | Task completed, wait for another query | Task completed, wait for another query                                                                           | **requestChat**    |

#### `requestSession`: First initiate a signature

This is a promise that will call back a **readableStream** object. You can get the conversation information through **readableStream.on('data')**, which will return an object:

```
  {
    code: 200,          // code
    message: "message", //  message
  }
```

Return Code and message

| Code | Message                          | Remark                                                                           |
| ---- | -------------------------------- | -------------------------------------------------------------------------------- |
| 200  | TransactionHash                  | requestSession transaction Hash                                                  |
| 301  | Connected to Nesa chain          | Nesa chain is connected, and returns after the chain parameters are initialized. |
| 302  | Choosing an inference validator  | Signature successful, Choosing an inference validator                            |
| 303  | Connecting to the validator      | Connecting to the validator                                                      |
| 304  | Waiting for query                | Waiting for query                                                                |
| 311  | LockAmount cannot be less than x | LockAmount check                                                                 |
| 312  | Sign register session failed     | Sign register session failed message                                             |
| 313  | Register session error           | Register session failed error                                                    |
| 314  | Chain params format error        | Chain params format error                                                        |
| 315  | Chain params error               | Chain params error message                                                       |
| 316  | SDK client init error            | SDK client init error                                                            |
| 317  | Wallet connect error             | Wallet connect error message                                                     |

#### `requestChat`: Start Conversation Interface

This is a promise that will call back a **readableStream** object. You can get the conversation information through **readableStream.on('data')**, which will return an object:

```
  {
    code: 200,  // code
    message: "hello", //  message
    total_payment: {  //  total_payment , If code is 200 it will return
      amount: 10, //  total_payment amount
      denom: 'unes' //  denom
    }
  }
```

Return Code and message

| Code | Message                                          | Remark                                 |
| ---- | ------------------------------------------------ | -------------------------------------- |
| 200  | Normal response                                  |
| 201  | No signature found or the signature has expired. |
| 202  | Illegal link                                     |
| 203  | Current chat contributions                       |
| 204  | `websocket` connection error message             |
| 205  | Business error information returned              |
| 305  | Conducting inference                             | Conducting inference                   |
| 306  | Receiving responses                              | Receiving responses                    |
| 307  | Task completed, wait for another query           | Task completed, wait for another query |

### Example

```
const { ChatClient } = require('nesa.js')
const { exit } = require('process')
const readline = require("node:readline");

const privateKey = 'c2769207c112c66a980dc50b74775e7a3cdb5e37a79884ebed2ae50417a7e237'
const requestSessionModel = 'meta-llama/Meta-Llama-3-70B'
const requestChatModel = 'meta-llama/Meta-Llama-3-70B'
const nesaTestnetChainInfo = {
    chainId: "nesa-testnet-3",
    chainName: "Nesa Testnet",
    chainSymbolImageUrl:
        "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/chain.png",
    rest: "https://lcd.test.nesa.ai",
    rpc: "https://rpc.test.nesa.ai",
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
};

const ChatClientUtils = new ChatClient({
    chainInfo: nesaTestnetChainInfo,
    privateKey: privateKey,
    modelName: requestSessionModel,
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
```
