"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLowBalance = exports.defaultPriceUnit = exports.sdkVersion = exports.defaultChainInfo = exports.defaultLockAmount = exports.defaultAgentUrl = void 0;
const defaultAgentUrl = 'wss://agent.nesa.ai/pingws';
exports.defaultAgentUrl = defaultAgentUrl;
const sdkVersion = '1.0.0';
exports.sdkVersion = sdkVersion;
const defaultLockAmount = '1000000';
exports.defaultLockAmount = defaultLockAmount;
const defaultPriceUnit = '1000000';
exports.defaultPriceUnit = defaultPriceUnit;
const defaultLowBalance = '10000';
exports.defaultLowBalance = defaultLowBalance;
const defaultChainInfo = {
    chainId: 'nesa-testnet-3',
    chainName: 'Nesa Testnet',
    chainSymbolImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/chain.png',
    rest: 'https://lcd.test.nesa.ai',
    rpc: 'https://rpc.test.nesa.ai',
    nodeProvider: {
        name: 'Nesa',
        email: 'dev@nesa.ai',
        website: 'https://nesa.ai/',
    },
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: 'nesa',
        bech32PrefixAccPub: 'nesa' + 'pub',
        bech32PrefixValAddr: 'nesa' + 'valoper',
        bech32PrefixValPub: 'nesa' + 'valoperpub',
        bech32PrefixConsAddr: 'nesa' + 'valcons',
        bech32PrefixConsPub: 'nesa' + 'valconspub',
    },
    currencies: [
        {
            coinDenom: 'NES',
            coinMinimalDenom: 'unes',
            coinDecimals: 6,
            coinGeckoId: 'nesa',
            coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png',
        },
    ],
    feeCurrencies: [
        {
            coinDenom: 'NES',
            coinMinimalDenom: 'unes',
            coinDecimals: 6,
            coinGeckoId: 'nesa',
            coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png',
            gasPriceStep: {
                low: 0.01,
                average: 0.02,
                high: 0.1,
            },
        },
    ],
    stakeCurrency: {
        coinDenom: 'NES',
        coinMinimalDenom: 'unes',
        coinDecimals: 6,
        coinGeckoId: 'nesa',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png',
        //@ts-ignore
        gasPriceStep: {},
        features: ['cosmwasm'],
    },
};
exports.defaultChainInfo = defaultChainInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVmYXVsdC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBTSxlQUFlLEdBQUcsNEJBQTRCLENBQUM7QUFvRW5ELDBDQUFlO0FBbkVqQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUM7QUFzRXpCLGdDQUFVO0FBckVaLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDO0FBbUVsQyw4Q0FBaUI7QUFsRW5CLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDO0FBcUVqQyw0Q0FBZ0I7QUFwRWxCLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDO0FBcUVoQyw4Q0FBaUI7QUFwRW5CLE1BQU0sZ0JBQWdCLEdBQWM7SUFDbEMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QixTQUFTLEVBQUUsY0FBYztJQUN6QixtQkFBbUIsRUFDakIsOEZBQThGO0lBQ2hHLElBQUksRUFBRSwwQkFBMEI7SUFDaEMsR0FBRyxFQUFFLDBCQUEwQjtJQUMvQixZQUFZLEVBQUU7UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxhQUFhO1FBQ3BCLE9BQU8sRUFBRSxrQkFBa0I7S0FDNUI7SUFFRCxLQUFLLEVBQUU7UUFDTCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osbUJBQW1CLEVBQUUsTUFBTTtRQUMzQixrQkFBa0IsRUFBRSxNQUFNLEdBQUcsS0FBSztRQUNsQyxtQkFBbUIsRUFBRSxNQUFNLEdBQUcsU0FBUztRQUN2QyxrQkFBa0IsRUFBRSxNQUFNLEdBQUcsWUFBWTtRQUN6QyxvQkFBb0IsRUFBRSxNQUFNLEdBQUcsU0FBUztRQUN4QyxtQkFBbUIsRUFBRSxNQUFNLEdBQUcsWUFBWTtLQUMzQztJQUNELFVBQVUsRUFBRTtRQUNWO1lBQ0UsU0FBUyxFQUFFLEtBQUs7WUFDaEIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixZQUFZLEVBQUUsQ0FBQztZQUNmLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFlBQVksRUFDViw0RkFBNEY7U0FDL0Y7S0FDRjtJQUNELGFBQWEsRUFBRTtRQUNiO1lBQ0UsU0FBUyxFQUFFLEtBQUs7WUFDaEIsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixZQUFZLEVBQUUsQ0FBQztZQUNmLFdBQVcsRUFBRSxNQUFNO1lBQ25CLFlBQVksRUFDViw0RkFBNEY7WUFDOUYsWUFBWSxFQUFFO2dCQUNaLEdBQUcsRUFBRSxJQUFJO2dCQUNULE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxHQUFHO2FBQ1Y7U0FDRjtLQUNGO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsU0FBUyxFQUFFLEtBQUs7UUFDaEIsZ0JBQWdCLEVBQUUsTUFBTTtRQUN4QixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxNQUFNO1FBQ25CLFlBQVksRUFDViw0RkFBNEY7UUFDOUYsWUFBWTtRQUNaLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQztLQUN2QjtDQUNGLENBQUM7QUFLQSw0Q0FBZ0IifQ==