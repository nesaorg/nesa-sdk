import { ChainInfo } from "@leapwallet/cosmos-snap-provider";

export const getIsChainInfoValid = (chainInfo: ChainInfo) => {
  return (
    chainInfo?.rpc &&
    chainInfo?.rest &&
    chainInfo?.feeCurrencies &&
    chainInfo?.feeCurrencies.length > 0 &&
    chainInfo?.feeCurrencies[0]?.coinMinimalDenom
  );
};
