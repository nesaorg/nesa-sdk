"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLowBalance = exports.defaultSinglePaymentAmount = exports.sdkVersion = exports.defaultChainInfo = exports.defaultLockAmount = exports.defaultAgentUrl = void 0;
const defaultAgentUrl = "wss://agent.nesa.ai/pingws";
exports.defaultAgentUrl = defaultAgentUrl;
const sdkVersion = '1.0.0';
exports.sdkVersion = sdkVersion;
const defaultLockAmount = '1000000';
exports.defaultLockAmount = defaultLockAmount;
const defaultSinglePaymentAmount = '100000';
exports.defaultSinglePaymentAmount = defaultSinglePaymentAmount;
const defaultLowBalance = '10000';
exports.defaultLowBalance = defaultLowBalance;
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
    currencies: [
        {
            coinDenom: "NES",
            coinMinimalDenom: "unes",
            coinDecimals: 6,
            coinGeckoId: "nesa",
            coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
        },
    ],
    feeCurrencies: [
        {
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
        },
    ],
    stakeCurrency: {
        coinDenom: "NES",
        coinMinimalDenom: "unes",
        coinDecimals: 6,
        coinGeckoId: "nesa",
        coinImageUrl: "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png",
        //@ts-ignore
        gasPriceStep: {},
        features: ["cosmwasm"],
    },
};
exports.defaultChainInfo = defaultChainInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVmYXVsdC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsNEJBQTRCLENBQUM7QUFvRWpELDBDQUFlO0FBbkVuQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUE7QUFzRXRCLGdDQUFVO0FBckVkLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFBO0FBbUUvQiw4Q0FBaUI7QUFsRXJCLE1BQU0sMEJBQTBCLEdBQUcsUUFBUSxDQUFBO0FBcUV2QyxnRUFBMEI7QUFwRTlCLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFBO0FBcUU3Qiw4Q0FBaUI7QUFwRXJCLE1BQU0sZ0JBQWdCLEdBQWM7SUFDaEMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixTQUFTLEVBQUUsY0FBYztJQUN6QixtQkFBbUIsRUFDZiw4RkFBOEY7SUFDbEcsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxHQUFHLEVBQUUsMEJBQTBCO0lBQy9CLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLGFBQWE7UUFDcEIsT0FBTyxFQUFFLGtCQUFrQjtLQUM5QjtJQUVELEtBQUssRUFBRTtRQUNILFFBQVEsRUFBRSxHQUFHO0tBQ2hCO0lBQ0QsWUFBWSxFQUFFO1FBQ1YsbUJBQW1CLEVBQUUsTUFBTTtRQUMzQixrQkFBa0IsRUFBRSxNQUFNLEdBQUcsS0FBSztRQUNsQyxtQkFBbUIsRUFBRSxNQUFNLEdBQUcsU0FBUztRQUN2QyxrQkFBa0IsRUFBRSxNQUFNLEdBQUcsWUFBWTtRQUN6QyxvQkFBb0IsRUFBRSxNQUFNLEdBQUcsU0FBUztRQUN4QyxtQkFBbUIsRUFBRSxNQUFNLEdBQUcsWUFBWTtLQUM3QztJQUNELFVBQVUsRUFBRTtRQUNSO1lBQ0ksU0FBUyxFQUFFLEtBQUs7WUFDaEIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixZQUFZLEVBQUUsQ0FBQztZQUNmLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFlBQVksRUFDUiw0RkFBNEY7U0FDbkc7S0FDSjtJQUNELGFBQWEsRUFBRTtRQUNYO1lBQ0ksU0FBUyxFQUFFLEtBQUs7WUFDaEIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixZQUFZLEVBQUUsQ0FBQztZQUNmLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFlBQVksRUFDUiw0RkFBNEY7WUFDaEcsWUFBWSxFQUFFO2dCQUNWLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxHQUFHO2FBQ1o7U0FDSjtLQUNKO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsU0FBUyxFQUFFLEtBQUs7UUFDaEIsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4QixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxNQUFNO1FBQ25CLFlBQVksRUFDUiw0RkFBNEY7UUFDaEcsWUFBWTtRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQztLQUN6QjtDQUNKLENBQUM7QUFLRSw0Q0FBZ0IifQ==