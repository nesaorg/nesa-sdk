"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletOperation = exports.ChatClient = void 0;
const chatClient_1 = __importDefault(require("./chatClient"));
exports.ChatClient = chatClient_1.default;
const walletOperation_1 = __importDefault(require("./walletOperation"));
exports.WalletOperation = walletOperation_1.default;
class NesaSdk {
    constructor(modelId) {
        this.modelId = modelId;
    }
    getConfig() {
        return {
            modelId: this.modelId,
        };
    }
}
exports.default = NesaSdk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQXNDO0FBaUI3QixxQkFqQkYsb0JBQVUsQ0FpQkU7QUFoQm5CLHdFQUErQztBQWdCMUIsMEJBaEJkLHlCQUFlLENBZ0JjO0FBZHBDLE1BQU0sT0FBTztJQUdYLFlBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDdEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUdELGtCQUFlLE9BQU8sQ0FBQyJ9