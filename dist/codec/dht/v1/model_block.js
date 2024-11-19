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
exports.ModelBlock = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../helpers");
exports.protobufPackage = "dht.v1";
function createBaseModelBlock() {
    return {
        modelName: "",
        nodeId: "",
        blockId: 0,
        cid: ""
    };
}
exports.ModelBlock = {
    typeUrl: "/dht.v1.ModelBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (message.modelName !== "") {
            writer.uint32(10).string(message.modelName);
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.blockId !== 0) {
            writer.uint32(24).uint32(message.blockId);
        }
        if (message.cid !== "") {
            writer.uint32(34).string(message.cid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModelBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modelName = reader.string();
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.blockId = reader.uint32();
                    break;
                case 4:
                    message.cid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModelBlock();
        if ((0, helpers_1.isSet)(object.modelName))
            obj.modelName = String(object.modelName);
        if ((0, helpers_1.isSet)(object.nodeId))
            obj.nodeId = String(object.nodeId);
        if ((0, helpers_1.isSet)(object.blockId))
            obj.blockId = Number(object.blockId);
        if ((0, helpers_1.isSet)(object.cid))
            obj.cid = String(object.cid);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.modelName !== undefined && (obj.modelName = message.modelName);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.blockId !== undefined && (obj.blockId = Math.round(message.blockId));
        message.cid !== undefined && (obj.cid = message.cid);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModelBlock();
        message.modelName = object.modelName ?? "";
        message.nodeId = object.nodeId ?? "";
        message.blockId = object.blockId ?? 0;
        message.cid = object.cid ?? "";
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWxfYmxvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29kZWMvZGh0L3YxL21vZGVsX2Jsb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdEQUEwQztBQUMxQywyQ0FBMEQ7QUFFN0MsUUFBQSxlQUFlLEdBQUcsUUFBUSxDQUFDO0FBT3hDLFNBQVMsb0JBQW9CO0lBQzNCLE9BQU87UUFDTCxTQUFTLEVBQUUsRUFBRTtRQUNiLE1BQU0sRUFBRSxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUM7UUFDVixHQUFHLEVBQUUsRUFBRTtLQUNSLENBQUM7QUFDSixDQUFDO0FBQ1ksUUFBQSxVQUFVLEdBQUc7SUFDeEIsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixNQUFNLENBQUMsT0FBbUIsRUFBRSxTQUFxQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNsRSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxFQUFF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