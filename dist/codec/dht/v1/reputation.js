"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reputation = exports.protobufPackage = void 0;
/* eslint-disable */
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "dht.v1";
function createBaseReputation() {
    return {
        name: "",
        score: helpers_1.Long.ZERO
    };
}
exports.Reputation = {
    typeUrl: "/dht.v1.Reputation",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (!message.score.isZero()) {
            writer.uint32(16).int64(message.score);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReputation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseReputation();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_1.isSet)(object.score))
            obj.score = helpers_1.Long.fromValue(object.score);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.score !== undefined && (obj.score = (message.score || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseReputation();
        message.name = object.name ?? "";
        if (object.score !== undefined && object.score !== null) {
            message.score = helpers_1.Long.fromValue(object.score);
        }
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwdXRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2RlYy9kaHQvdjEvcmVwdXRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiwyQ0FBZ0U7QUFDaEUsd0RBQTBDO0FBRTdCLFFBQUEsZUFBZSxHQUFHLFFBQVEsQ0FBQztBQUt4QyxTQUFTLG9CQUFvQjtJQUMzQixPQUFPO1FBQ0wsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsY0FBSSxDQUFDLElBQUk7S0FDakIsQ0FBQztBQUNKLENBQUM7QUFDWSxRQUFBLFVBQVUsR0FBRztJQUN4QixPQUFPLEVBQUUsb0JBQW9CO0lBQzdCLE1BQU0sQ0FBQyxPQUFtQixFQUFFLFNBQXFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1FBQ2xFLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQThCLEVBQUUsTUFBZTtRQUNwRCxNQUFNLE1BQU0sR0FBRyxLQUFLLFlBQVksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0UsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDbEUsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztRQUN2QyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDeEIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNsQixLQUFLLENBQUM7b0JBQ0osT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBVSxDQUFDO29CQUN2QyxNQUFNO2dCQUNSO29CQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QixNQUFNO1lBQ1YsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0QsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxHQUFHLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztRQUNuQyxJQUFJLElBQUEsZUFBSyxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxJQUFBLGVBQUssRUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBbUI7UUFDeEIsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNyRixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCxXQUFXLENBQThDLE1BQVM7UUFDaEUsTUFBTSxPQUFPLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN4RCxPQUFPLENBQUMsS0FBSyxHQUFHLGNBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQyJ9