"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsChainInfoValid = void 0;
const getIsChainInfoValid = (chainInfo) => {
    return (chainInfo?.rpc &&
        chainInfo?.rest &&
        chainInfo?.feeCurrencies &&
        chainInfo?.feeCurrencies.length > 0 &&
        chainInfo?.feeCurrencies[0]?.coinMinimalDenom);
};
exports.getIsChainInfoValid = getIsChainInfoValid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SXNDaGFpbkluZm9WYWxpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2dldElzQ2hhaW5JbmZvVmFsaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtJQUMxRCxPQUFPLENBQ0wsU0FBUyxFQUFFLEdBQUc7UUFDZCxTQUFTLEVBQUUsSUFBSTtRQUNmLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLFNBQVMsRUFBRSxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDbkMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FDOUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVJXLFFBQUEsbUJBQW1CLHVCQVE5QiJ9