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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.MethodOptions_IdempotencyLevel = exports.FieldOptions_JSType = exports.FieldOptions_CType = exports.FileOptions_OptimizeMode = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto_Type = exports.protobufPackage = void 0;
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
/* eslint-disable */
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type = {}));
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        case FieldDescriptorProto_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label = {}));
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        case FieldDescriptorProto_Label.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode = {}));
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        case FileOptions_OptimizeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType || (exports.FieldOptions_CType = FieldOptions_CType = {}));
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        case FieldOptions_CType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType || (exports.FieldOptions_JSType = FieldOptions_JSType = {}));
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        case FieldOptions_JSType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel = {}));
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseFileDescriptorSet() {
    return {
        file: []
    };
}
exports.FileDescriptorSet = {
    typeUrl: "/google.protobuf.FileDescriptorSet",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.file) {
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFileDescriptorSet();
        if (Array.isArray(object?.file))
            obj.file = object.file.map((e) => exports.FileDescriptorProto.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.file) {
            obj.file = message.file.map(e => e ? exports.FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.file = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorSet();
        message.file = object.file?.map(e => exports.FileDescriptorProto.fromPartial(e)) || [];
        return message;
    }
};
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        messageType: [],
        enumType: [],
        service: [],
        extension: [],
        options: undefined,
        sourceCodeInfo: undefined,
        syntax: ""
    };
}
exports.FileDescriptorProto = {
    typeUrl: "/google.protobuf.FileDescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        for (const v of message.dependency) {
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (const v of message.publicDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (const v of message.weakDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.messageType) {
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.service) {
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.package = reader.string();
                    break;
                case 3:
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.publicDependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.weakDependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFileDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_1.isSet)(object.package))
            obj.package = String(object.package);
        if (Array.isArray(object?.dependency))
            obj.dependency = object.dependency.map((e) => String(e));
        if (Array.isArray(object?.publicDependency))
            obj.publicDependency = object.publicDependency.map((e) => Number(e));
        if (Array.isArray(object?.weakDependency))
            obj.weakDependency = object.weakDependency.map((e) => Number(e));
        if (Array.isArray(object?.messageType))
            obj.messageType = object.messageType.map((e) => exports.DescriptorProto.fromJSON(e));
        if (Array.isArray(object?.enumType))
            obj.enumType = object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e));
        if (Array.isArray(object?.service))
            obj.service = object.service.map((e) => exports.ServiceDescriptorProto.fromJSON(e));
        if (Array.isArray(object?.extension))
            obj.extension = object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e));
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.FileOptions.fromJSON(object.options);
        if ((0, helpers_1.isSet)(object.sourceCodeInfo))
            obj.sourceCodeInfo = exports.SourceCodeInfo.fromJSON(object.sourceCodeInfo);
        if ((0, helpers_1.isSet)(object.syntax))
            obj.syntax = String(object.syntax);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.package !== undefined && (obj.package = message.package);
        if (message.dependency) {
            obj.dependency = message.dependency.map(e => e);
        }
        else {
            obj.dependency = [];
        }
        if (message.publicDependency) {
            obj.publicDependency = message.publicDependency.map(e => Math.round(e));
        }
        else {
            obj.publicDependency = [];
        }
        if (message.weakDependency) {
            obj.weakDependency = message.weakDependency.map(e => Math.round(e));
        }
        else {
            obj.weakDependency = [];
        }
        if (message.messageType) {
            obj.messageType = message.messageType.map(e => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.messageType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map(e => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enumType = [];
        }
        if (message.service) {
            obj.service = message.service.map(e => e ? exports.ServiceDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map(e => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        message.options !== undefined && (obj.options = message.options ? exports.FileOptions.toJSON(message.options) : undefined);
        message.sourceCodeInfo !== undefined && (obj.sourceCodeInfo = message.sourceCodeInfo ? exports.SourceCodeInfo.toJSON(message.sourceCodeInfo) : undefined);
        message.syntax !== undefined && (obj.syntax = message.syntax);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorProto();
        message.name = object.name ?? "";
        message.package = object.package ?? "";
        message.dependency = object.dependency?.map(e => e) || [];
        message.publicDependency = object.publicDependency?.map(e => e) || [];
        message.weakDependency = object.weakDependency?.map(e => e) || [];
        message.messageType = object.messageType?.map(e => exports.DescriptorProto.fromPartial(e)) || [];
        message.enumType = object.enumType?.map(e => exports.EnumDescriptorProto.fromPartial(e)) || [];
        message.service = object.service?.map(e => exports.ServiceDescriptorProto.fromPartial(e)) || [];
        message.extension = object.extension?.map(e => exports.FieldDescriptorProto.fromPartial(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.FileOptions.fromPartial(object.options);
        }
        if (object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null) {
            message.sourceCodeInfo = exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo);
        }
        message.syntax = object.syntax ?? "";
        return message;
    }
};
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.DescriptorProto = {
    typeUrl: "/google.protobuf.DescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.field) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.nestedType) {
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.extensionRange) {
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.oneofDecl) {
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if (Array.isArray(object?.field))
            obj.field = object.field.map((e) => exports.FieldDescriptorProto.fromJSON(e));
        if (Array.isArray(object?.extension))
            obj.extension = object.extension.map((e) => exports.FieldDescriptorProto.fromJSON(e));
        if (Array.isArray(object?.nestedType))
            obj.nestedType = object.nestedType.map((e) => exports.DescriptorProto.fromJSON(e));
        if (Array.isArray(object?.enumType))
            obj.enumType = object.enumType.map((e) => exports.EnumDescriptorProto.fromJSON(e));
        if (Array.isArray(object?.extensionRange))
            obj.extensionRange = object.extensionRange.map((e) => exports.DescriptorProto_ExtensionRange.fromJSON(e));
        if (Array.isArray(object?.oneofDecl))
            obj.oneofDecl = object.oneofDecl.map((e) => exports.OneofDescriptorProto.fromJSON(e));
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.MessageOptions.fromJSON(object.options);
        if (Array.isArray(object?.reservedRange))
            obj.reservedRange = object.reservedRange.map((e) => exports.DescriptorProto_ReservedRange.fromJSON(e));
        if (Array.isArray(object?.reservedName))
            obj.reservedName = object.reservedName.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.field) {
            obj.field = message.field.map(e => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.field = [];
        }
        if (message.extension) {
            obj.extension = message.extension.map(e => e ? exports.FieldDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.extension = [];
        }
        if (message.nestedType) {
            obj.nestedType = message.nestedType.map(e => e ? exports.DescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.nestedType = [];
        }
        if (message.enumType) {
            obj.enumType = message.enumType.map(e => e ? exports.EnumDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.enumType = [];
        }
        if (message.extensionRange) {
            obj.extensionRange = message.extensionRange.map(e => e ? exports.DescriptorProto_ExtensionRange.toJSON(e) : undefined);
        }
        else {
            obj.extensionRange = [];
        }
        if (message.oneofDecl) {
            obj.oneofDecl = message.oneofDecl.map(e => e ? exports.OneofDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.oneofDecl = [];
        }
        message.options !== undefined && (obj.options = message.options ? exports.MessageOptions.toJSON(message.options) : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map(e => e ? exports.DescriptorProto_ReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map(e => e);
        }
        else {
            obj.reservedName = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto();
        message.name = object.name ?? "";
        message.field = object.field?.map(e => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.extension = object.extension?.map(e => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.nestedType = object.nestedType?.map(e => exports.DescriptorProto.fromPartial(e)) || [];
        message.enumType = object.enumType?.map(e => exports.EnumDescriptorProto.fromPartial(e)) || [];
        message.extensionRange = object.extensionRange?.map(e => exports.DescriptorProto_ExtensionRange.fromPartial(e)) || [];
        message.oneofDecl = object.oneofDecl?.map(e => exports.OneofDescriptorProto.fromPartial(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.MessageOptions.fromPartial(object.options);
        }
        message.reservedRange = object.reservedRange?.map(e => exports.DescriptorProto_ReservedRange.fromPartial(e)) || [];
        message.reservedName = object.reservedName?.map(e => e) || [];
        return message;
    }
};
function createBaseDescriptorProto_ExtensionRange() {
    return {
        start: 0,
        end: 0,
        options: undefined
    };
}
exports.DescriptorProto_ExtensionRange = {
    typeUrl: "/google.protobuf.ExtensionRange",
    encode(message, writer = _m0.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDescriptorProto_ExtensionRange();
        if ((0, helpers_1.isSet)(object.start))
            obj.start = Number(object.start);
        if ((0, helpers_1.isSet)(object.end))
            obj.end = Number(object.end);
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.ExtensionRangeOptions.fromJSON(object.options);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        message.options !== undefined && (obj.options = message.options ? exports.ExtensionRangeOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto_ExtensionRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.ExtensionRangeOptions.fromPartial(object.options);
        }
        return message;
    }
};
function createBaseDescriptorProto_ReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.DescriptorProto_ReservedRange = {
    typeUrl: "/google.protobuf.ReservedRange",
    encode(message, writer = _m0.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDescriptorProto_ReservedRange();
        if ((0, helpers_1.isSet)(object.start))
            obj.start = Number(object.start);
        if ((0, helpers_1.isSet)(object.end))
            obj.end = Number(object.end);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto_ReservedRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        return message;
    }
};
function createBaseExtensionRangeOptions() {
    return {
        uninterpretedOption: []
    };
}
exports.ExtensionRangeOptions = {
    typeUrl: "/google.protobuf.ExtensionRangeOptions",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseExtensionRangeOptions();
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        options: undefined
    };
}
exports.FieldDescriptorProto = {
    typeUrl: "/google.protobuf.FieldDescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFieldDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_1.isSet)(object.number))
            obj.number = Number(object.number);
        if ((0, helpers_1.isSet)(object.label))
            obj.label = fieldDescriptorProto_LabelFromJSON(object.label);
        if ((0, helpers_1.isSet)(object.type))
            obj.type = fieldDescriptorProto_TypeFromJSON(object.type);
        if ((0, helpers_1.isSet)(object.typeName))
            obj.typeName = String(object.typeName);
        if ((0, helpers_1.isSet)(object.extendee))
            obj.extendee = String(object.extendee);
        if ((0, helpers_1.isSet)(object.defaultValue))
            obj.defaultValue = String(object.defaultValue);
        if ((0, helpers_1.isSet)(object.oneofIndex))
            obj.oneofIndex = Number(object.oneofIndex);
        if ((0, helpers_1.isSet)(object.jsonName))
            obj.jsonName = String(object.jsonName);
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.FieldOptions.fromJSON(object.options);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.label !== undefined && (obj.label = fieldDescriptorProto_LabelToJSON(message.label));
        message.type !== undefined && (obj.type = fieldDescriptorProto_TypeToJSON(message.type));
        message.typeName !== undefined && (obj.typeName = message.typeName);
        message.extendee !== undefined && (obj.extendee = message.extendee);
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        message.oneofIndex !== undefined && (obj.oneofIndex = Math.round(message.oneofIndex));
        message.jsonName !== undefined && (obj.jsonName = message.jsonName);
        message.options !== undefined && (obj.options = message.options ? exports.FieldOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFieldDescriptorProto();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.label = object.label ?? 1;
        message.type = object.type ?? 1;
        message.typeName = object.typeName ?? "";
        message.extendee = object.extendee ?? "";
        message.defaultValue = object.defaultValue ?? "";
        message.oneofIndex = object.oneofIndex ?? 0;
        message.jsonName = object.jsonName ?? "";
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.FieldOptions.fromPartial(object.options);
        }
        return message;
    }
};
function createBaseOneofDescriptorProto() {
    return {
        name: "",
        options: undefined
    };
}
exports.OneofDescriptorProto = {
    typeUrl: "/google.protobuf.OneofDescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseOneofDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.OneofOptions.fromJSON(object.options);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.options !== undefined && (obj.options = message.options ? exports.OneofOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOneofDescriptorProto();
        message.name = object.name ?? "";
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.OneofOptions.fromPartial(object.options);
        }
        return message;
    }
};
function createBaseEnumDescriptorProto() {
    return {
        name: "",
        value: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.EnumDescriptorProto = {
    typeUrl: "/google.protobuf.EnumDescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.value) {
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEnumDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if (Array.isArray(object?.value))
            obj.value = object.value.map((e) => exports.EnumValueDescriptorProto.fromJSON(e));
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.EnumOptions.fromJSON(object.options);
        if (Array.isArray(object?.reservedRange))
            obj.reservedRange = object.reservedRange.map((e) => exports.EnumDescriptorProto_EnumReservedRange.fromJSON(e));
        if (Array.isArray(object?.reservedName))
            obj.reservedName = object.reservedName.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.value) {
            obj.value = message.value.map(e => e ? exports.EnumValueDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.value = [];
        }
        message.options !== undefined && (obj.options = message.options ? exports.EnumOptions.toJSON(message.options) : undefined);
        if (message.reservedRange) {
            obj.reservedRange = message.reservedRange.map(e => e ? exports.EnumDescriptorProto_EnumReservedRange.toJSON(e) : undefined);
        }
        else {
            obj.reservedRange = [];
        }
        if (message.reservedName) {
            obj.reservedName = message.reservedName.map(e => e);
        }
        else {
            obj.reservedName = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEnumDescriptorProto();
        message.name = object.name ?? "";
        message.value = object.value?.map(e => exports.EnumValueDescriptorProto.fromPartial(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.EnumOptions.fromPartial(object.options);
        }
        message.reservedRange = object.reservedRange?.map(e => exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
        message.reservedName = object.reservedName?.map(e => e) || [];
        return message;
    }
};
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.EnumDescriptorProto_EnumReservedRange = {
    typeUrl: "/google.protobuf.EnumReservedRange",
    encode(message, writer = _m0.Writer.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEnumDescriptorProto_EnumReservedRange();
        if ((0, helpers_1.isSet)(object.start))
            obj.start = Number(object.start);
        if ((0, helpers_1.isSet)(object.end))
            obj.end = Number(object.end);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.start !== undefined && (obj.start = Math.round(message.start));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        return message;
    }
};
function createBaseEnumValueDescriptorProto() {
    return {
        name: "",
        number: 0,
        options: undefined
    };
}
exports.EnumValueDescriptorProto = {
    typeUrl: "/google.protobuf.EnumValueDescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEnumValueDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_1.isSet)(object.number))
            obj.number = Number(object.number);
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.EnumValueOptions.fromJSON(object.options);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.options !== undefined && (obj.options = message.options ? exports.EnumValueOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEnumValueDescriptorProto();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.EnumValueOptions.fromPartial(object.options);
        }
        return message;
    }
};
function createBaseServiceDescriptorProto() {
    return {
        name: "",
        method: [],
        options: undefined
    };
}
exports.ServiceDescriptorProto = {
    typeUrl: "/google.protobuf.ServiceDescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.method) {
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseServiceDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if (Array.isArray(object?.method))
            obj.method = object.method.map((e) => exports.MethodDescriptorProto.fromJSON(e));
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.ServiceOptions.fromJSON(object.options);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.method) {
            obj.method = message.method.map(e => e ? exports.MethodDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.method = [];
        }
        message.options !== undefined && (obj.options = message.options ? exports.ServiceOptions.toJSON(message.options) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseServiceDescriptorProto();
        message.name = object.name ?? "";
        message.method = object.method?.map(e => exports.MethodDescriptorProto.fromPartial(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.ServiceOptions.fromPartial(object.options);
        }
        return message;
    }
};
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        inputType: "",
        outputType: "",
        options: undefined,
        clientStreaming: false,
        serverStreaming: false
    };
}
exports.MethodDescriptorProto = {
    typeUrl: "/google.protobuf.MethodDescriptorProto",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMethodDescriptorProto();
        if ((0, helpers_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_1.isSet)(object.inputType))
            obj.inputType = String(object.inputType);
        if ((0, helpers_1.isSet)(object.outputType))
            obj.outputType = String(object.outputType);
        if ((0, helpers_1.isSet)(object.options))
            obj.options = exports.MethodOptions.fromJSON(object.options);
        if ((0, helpers_1.isSet)(object.clientStreaming))
            obj.clientStreaming = Boolean(object.clientStreaming);
        if ((0, helpers_1.isSet)(object.serverStreaming))
            obj.serverStreaming = Boolean(object.serverStreaming);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.inputType !== undefined && (obj.inputType = message.inputType);
        message.outputType !== undefined && (obj.outputType = message.outputType);
        message.options !== undefined && (obj.options = message.options ? exports.MethodOptions.toJSON(message.options) : undefined);
        message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
        message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMethodDescriptorProto();
        message.name = object.name ?? "";
        message.inputType = object.inputType ?? "";
        message.outputType = object.outputType ?? "";
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.MethodOptions.fromPartial(object.options);
        }
        message.clientStreaming = object.clientStreaming ?? false;
        message.serverStreaming = object.serverStreaming ?? false;
        return message;
    }
};
function createBaseFileOptions() {
    return {
        javaPackage: "",
        javaOuterClassname: "",
        javaMultipleFiles: false,
        javaGenerateEqualsAndHash: false,
        javaStringCheckUtf8: false,
        optimizeFor: 1,
        goPackage: "",
        ccGenericServices: false,
        javaGenericServices: false,
        pyGenericServices: false,
        phpGenericServices: false,
        deprecated: false,
        ccEnableArenas: false,
        objcClassPrefix: "",
        csharpNamespace: "",
        swiftPrefix: "",
        phpClassPrefix: "",
        phpNamespace: "",
        phpMetadataNamespace: "",
        rubyPackage: "",
        uninterpretedOption: []
    };
}
exports.FileOptions = {
    typeUrl: "/google.protobuf.FileOptions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 42:
                    message.phpGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 39:
                    message.swiftPrefix = reader.string();
                    break;
                case 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case 41:
                    message.phpNamespace = reader.string();
                    break;
                case 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case 45:
                    message.rubyPackage = reader.string();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFileOptions();
        if ((0, helpers_1.isSet)(object.javaPackage))
            obj.javaPackage = String(object.javaPackage);
        if ((0, helpers_1.isSet)(object.javaOuterClassname))
            obj.javaOuterClassname = String(object.javaOuterClassname);
        if ((0, helpers_1.isSet)(object.javaMultipleFiles))
            obj.javaMultipleFiles = Boolean(object.javaMultipleFiles);
        if ((0, helpers_1.isSet)(object.javaGenerateEqualsAndHash))
            obj.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
        if ((0, helpers_1.isSet)(object.javaStringCheckUtf8))
            obj.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
        if ((0, helpers_1.isSet)(object.optimizeFor))
            obj.optimizeFor = fileOptions_OptimizeModeFromJSON(object.optimizeFor);
        if ((0, helpers_1.isSet)(object.goPackage))
            obj.goPackage = String(object.goPackage);
        if ((0, helpers_1.isSet)(object.ccGenericServices))
            obj.ccGenericServices = Boolean(object.ccGenericServices);
        if ((0, helpers_1.isSet)(object.javaGenericServices))
            obj.javaGenericServices = Boolean(object.javaGenericServices);
        if ((0, helpers_1.isSet)(object.pyGenericServices))
            obj.pyGenericServices = Boolean(object.pyGenericServices);
        if ((0, helpers_1.isSet)(object.phpGenericServices))
            obj.phpGenericServices = Boolean(object.phpGenericServices);
        if ((0, helpers_1.isSet)(object.deprecated))
            obj.deprecated = Boolean(object.deprecated);
        if ((0, helpers_1.isSet)(object.ccEnableArenas))
            obj.ccEnableArenas = Boolean(object.ccEnableArenas);
        if ((0, helpers_1.isSet)(object.objcClassPrefix))
            obj.objcClassPrefix = String(object.objcClassPrefix);
        if ((0, helpers_1.isSet)(object.csharpNamespace))
            obj.csharpNamespace = String(object.csharpNamespace);
        if ((0, helpers_1.isSet)(object.swiftPrefix))
            obj.swiftPrefix = String(object.swiftPrefix);
        if ((0, helpers_1.isSet)(object.phpClassPrefix))
            obj.phpClassPrefix = String(object.phpClassPrefix);
        if ((0, helpers_1.isSet)(object.phpNamespace))
            obj.phpNamespace = String(object.phpNamespace);
        if ((0, helpers_1.isSet)(object.phpMetadataNamespace))
            obj.phpMetadataNamespace = String(object.phpMetadataNamespace);
        if ((0, helpers_1.isSet)(object.rubyPackage))
            obj.rubyPackage = String(object.rubyPackage);
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
        message.javaOuterClassname !== undefined && (obj.javaOuterClassname = message.javaOuterClassname);
        message.javaMultipleFiles !== undefined && (obj.javaMultipleFiles = message.javaMultipleFiles);
        message.javaGenerateEqualsAndHash !== undefined && (obj.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash);
        message.javaStringCheckUtf8 !== undefined && (obj.javaStringCheckUtf8 = message.javaStringCheckUtf8);
        message.optimizeFor !== undefined && (obj.optimizeFor = fileOptions_OptimizeModeToJSON(message.optimizeFor));
        message.goPackage !== undefined && (obj.goPackage = message.goPackage);
        message.ccGenericServices !== undefined && (obj.ccGenericServices = message.ccGenericServices);
        message.javaGenericServices !== undefined && (obj.javaGenericServices = message.javaGenericServices);
        message.pyGenericServices !== undefined && (obj.pyGenericServices = message.pyGenericServices);
        message.phpGenericServices !== undefined && (obj.phpGenericServices = message.phpGenericServices);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.ccEnableArenas !== undefined && (obj.ccEnableArenas = message.ccEnableArenas);
        message.objcClassPrefix !== undefined && (obj.objcClassPrefix = message.objcClassPrefix);
        message.csharpNamespace !== undefined && (obj.csharpNamespace = message.csharpNamespace);
        message.swiftPrefix !== undefined && (obj.swiftPrefix = message.swiftPrefix);
        message.phpClassPrefix !== undefined && (obj.phpClassPrefix = message.phpClassPrefix);
        message.phpNamespace !== undefined && (obj.phpNamespace = message.phpNamespace);
        message.phpMetadataNamespace !== undefined && (obj.phpMetadataNamespace = message.phpMetadataNamespace);
        message.rubyPackage !== undefined && (obj.rubyPackage = message.rubyPackage);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFileOptions();
        message.javaPackage = object.javaPackage ?? "";
        message.javaOuterClassname = object.javaOuterClassname ?? "";
        message.javaMultipleFiles = object.javaMultipleFiles ?? false;
        message.javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash ?? false;
        message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
        message.optimizeFor = object.optimizeFor ?? 1;
        message.goPackage = object.goPackage ?? "";
        message.ccGenericServices = object.ccGenericServices ?? false;
        message.javaGenericServices = object.javaGenericServices ?? false;
        message.pyGenericServices = object.pyGenericServices ?? false;
        message.phpGenericServices = object.phpGenericServices ?? false;
        message.deprecated = object.deprecated ?? false;
        message.ccEnableArenas = object.ccEnableArenas ?? false;
        message.objcClassPrefix = object.objcClassPrefix ?? "";
        message.csharpNamespace = object.csharpNamespace ?? "";
        message.swiftPrefix = object.swiftPrefix ?? "";
        message.phpClassPrefix = object.phpClassPrefix ?? "";
        message.phpNamespace = object.phpNamespace ?? "";
        message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
        message.rubyPackage = object.rubyPackage ?? "";
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseMessageOptions() {
    return {
        messageSetWireFormat: false,
        noStandardDescriptorAccessor: false,
        deprecated: false,
        mapEntry: false,
        uninterpretedOption: []
    };
}
exports.MessageOptions = {
    typeUrl: "/google.protobuf.MessageOptions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMessageOptions();
        if ((0, helpers_1.isSet)(object.messageSetWireFormat))
            obj.messageSetWireFormat = Boolean(object.messageSetWireFormat);
        if ((0, helpers_1.isSet)(object.noStandardDescriptorAccessor))
            obj.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
        if ((0, helpers_1.isSet)(object.deprecated))
            obj.deprecated = Boolean(object.deprecated);
        if ((0, helpers_1.isSet)(object.mapEntry))
            obj.mapEntry = Boolean(object.mapEntry);
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.messageSetWireFormat !== undefined && (obj.messageSetWireFormat = message.messageSetWireFormat);
        message.noStandardDescriptorAccessor !== undefined && (obj.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.mapEntry !== undefined && (obj.mapEntry = message.mapEntry);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessageOptions();
        message.messageSetWireFormat = object.messageSetWireFormat ?? false;
        message.noStandardDescriptorAccessor = object.noStandardDescriptorAccessor ?? false;
        message.deprecated = object.deprecated ?? false;
        message.mapEntry = object.mapEntry ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseFieldOptions() {
    return {
        ctype: 1,
        packed: false,
        jstype: 1,
        lazy: false,
        deprecated: false,
        weak: false,
        uninterpretedOption: []
    };
}
exports.FieldOptions = {
    typeUrl: "/google.protobuf.FieldOptions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ctype !== 1) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 1) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFieldOptions();
        if ((0, helpers_1.isSet)(object.ctype))
            obj.ctype = fieldOptions_CTypeFromJSON(object.ctype);
        if ((0, helpers_1.isSet)(object.packed))
            obj.packed = Boolean(object.packed);
        if ((0, helpers_1.isSet)(object.jstype))
            obj.jstype = fieldOptions_JSTypeFromJSON(object.jstype);
        if ((0, helpers_1.isSet)(object.lazy))
            obj.lazy = Boolean(object.lazy);
        if ((0, helpers_1.isSet)(object.deprecated))
            obj.deprecated = Boolean(object.deprecated);
        if ((0, helpers_1.isSet)(object.weak))
            obj.weak = Boolean(object.weak);
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.ctype !== undefined && (obj.ctype = fieldOptions_CTypeToJSON(message.ctype));
        message.packed !== undefined && (obj.packed = message.packed);
        message.jstype !== undefined && (obj.jstype = fieldOptions_JSTypeToJSON(message.jstype));
        message.lazy !== undefined && (obj.lazy = message.lazy);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.weak !== undefined && (obj.weak = message.weak);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFieldOptions();
        message.ctype = object.ctype ?? 1;
        message.packed = object.packed ?? false;
        message.jstype = object.jstype ?? 1;
        message.lazy = object.lazy ?? false;
        message.deprecated = object.deprecated ?? false;
        message.weak = object.weak ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseOneofOptions() {
    return {
        uninterpretedOption: []
    };
}
exports.OneofOptions = {
    typeUrl: "/google.protobuf.OneofOptions",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseOneofOptions();
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOneofOptions();
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseEnumOptions() {
    return {
        allowAlias: false,
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.EnumOptions = {
    typeUrl: "/google.protobuf.EnumOptions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEnumOptions();
        if ((0, helpers_1.isSet)(object.allowAlias))
            obj.allowAlias = Boolean(object.allowAlias);
        if ((0, helpers_1.isSet)(object.deprecated))
            obj.deprecated = Boolean(object.deprecated);
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.allowAlias !== undefined && (obj.allowAlias = message.allowAlias);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEnumOptions();
        message.allowAlias = object.allowAlias ?? false;
        message.deprecated = object.deprecated ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseEnumValueOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.EnumValueOptions = {
    typeUrl: "/google.protobuf.EnumValueOptions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseEnumValueOptions();
        if ((0, helpers_1.isSet)(object.deprecated))
            obj.deprecated = Boolean(object.deprecated);
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEnumValueOptions();
        message.deprecated = object.deprecated ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseServiceOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.ServiceOptions = {
    typeUrl: "/google.protobuf.ServiceOptions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseServiceOptions();
        if ((0, helpers_1.isSet)(object.deprecated))
            obj.deprecated = Boolean(object.deprecated);
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseServiceOptions();
        message.deprecated = object.deprecated ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseMethodOptions() {
    return {
        deprecated: false,
        idempotencyLevel: 1,
        uninterpretedOption: []
    };
}
exports.MethodOptions = {
    typeUrl: "/google.protobuf.MethodOptions",
    encode(message, writer = _m0.Writer.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 1) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMethodOptions();
        if ((0, helpers_1.isSet)(object.deprecated))
            obj.deprecated = Boolean(object.deprecated);
        if ((0, helpers_1.isSet)(object.idempotencyLevel))
            obj.idempotencyLevel = methodOptions_IdempotencyLevelFromJSON(object.idempotencyLevel);
        if (Array.isArray(object?.uninterpretedOption))
            obj.uninterpretedOption = object.uninterpretedOption.map((e) => exports.UninterpretedOption.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.idempotencyLevel !== undefined && (obj.idempotencyLevel = methodOptions_IdempotencyLevelToJSON(message.idempotencyLevel));
        if (message.uninterpretedOption) {
            obj.uninterpretedOption = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toJSON(e) : undefined);
        }
        else {
            obj.uninterpretedOption = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMethodOptions();
        message.deprecated = object.deprecated ?? false;
        message.idempotencyLevel = object.idempotencyLevel ?? 1;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    }
};
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifierValue: "",
        positiveIntValue: helpers_1.Long.UZERO,
        negativeIntValue: helpers_1.Long.ZERO,
        doubleValue: 0,
        stringValue: new Uint8Array(),
        aggregateValue: ""
    };
}
exports.UninterpretedOption = {
    typeUrl: "/google.protobuf.UninterpretedOption",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.name) {
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (!message.positiveIntValue.isZero()) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (!message.negativeIntValue.isZero()) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = reader.uint64();
                    break;
                case 5:
                    message.negativeIntValue = reader.int64();
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUninterpretedOption();
        if (Array.isArray(object?.name))
            obj.name = object.name.map((e) => exports.UninterpretedOption_NamePart.fromJSON(e));
        if ((0, helpers_1.isSet)(object.identifierValue))
            obj.identifierValue = String(object.identifierValue);
        if ((0, helpers_1.isSet)(object.positiveIntValue))
            obj.positiveIntValue = helpers_1.Long.fromValue(object.positiveIntValue);
        if ((0, helpers_1.isSet)(object.negativeIntValue))
            obj.negativeIntValue = helpers_1.Long.fromValue(object.negativeIntValue);
        if ((0, helpers_1.isSet)(object.doubleValue))
            obj.doubleValue = Number(object.doubleValue);
        if ((0, helpers_1.isSet)(object.stringValue))
            obj.stringValue = (0, helpers_1.bytesFromBase64)(object.stringValue);
        if ((0, helpers_1.isSet)(object.aggregateValue))
            obj.aggregateValue = String(object.aggregateValue);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.name) {
            obj.name = message.name.map(e => e ? exports.UninterpretedOption_NamePart.toJSON(e) : undefined);
        }
        else {
            obj.name = [];
        }
        message.identifierValue !== undefined && (obj.identifierValue = message.identifierValue);
        message.positiveIntValue !== undefined && (obj.positiveIntValue = (message.positiveIntValue || helpers_1.Long.UZERO).toString());
        message.negativeIntValue !== undefined && (obj.negativeIntValue = (message.negativeIntValue || helpers_1.Long.ZERO).toString());
        message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
        message.stringValue !== undefined && (obj.stringValue = (0, helpers_1.base64FromBytes)(message.stringValue !== undefined ? message.stringValue : new Uint8Array()));
        message.aggregateValue !== undefined && (obj.aggregateValue = message.aggregateValue);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUninterpretedOption();
        message.name = object.name?.map(e => exports.UninterpretedOption_NamePart.fromPartial(e)) || [];
        message.identifierValue = object.identifierValue ?? "";
        if (object.positiveIntValue !== undefined && object.positiveIntValue !== null) {
            message.positiveIntValue = helpers_1.Long.fromValue(object.positiveIntValue);
        }
        if (object.negativeIntValue !== undefined && object.negativeIntValue !== null) {
            message.negativeIntValue = helpers_1.Long.fromValue(object.negativeIntValue);
        }
        message.doubleValue = object.doubleValue ?? 0;
        message.stringValue = object.stringValue ?? new Uint8Array();
        message.aggregateValue = object.aggregateValue ?? "";
        return message;
    }
};
function createBaseUninterpretedOption_NamePart() {
    return {
        namePart: "",
        isExtension: false
    };
}
exports.UninterpretedOption_NamePart = {
    typeUrl: "/google.protobuf.NamePart",
    encode(message, writer = _m0.Writer.create()) {
        if (message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.namePart = reader.string();
                    break;
                case 2:
                    message.isExtension = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseUninterpretedOption_NamePart();
        if ((0, helpers_1.isSet)(object.namePart))
            obj.namePart = String(object.namePart);
        if ((0, helpers_1.isSet)(object.isExtension))
            obj.isExtension = Boolean(object.isExtension);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.namePart !== undefined && (obj.namePart = message.namePart);
        message.isExtension !== undefined && (obj.isExtension = message.isExtension);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUninterpretedOption_NamePart();
        message.namePart = object.namePart ?? "";
        message.isExtension = object.isExtension ?? false;
        return message;
    }
};
function createBaseSourceCodeInfo() {
    return {
        location: []
    };
}
exports.SourceCodeInfo = {
    typeUrl: "/google.protobuf.SourceCodeInfo",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.location) {
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSourceCodeInfo();
        if (Array.isArray(object?.location))
            obj.location = object.location.map((e) => exports.SourceCodeInfo_Location.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.location) {
            obj.location = message.location.map(e => e ? exports.SourceCodeInfo_Location.toJSON(e) : undefined);
        }
        else {
            obj.location = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSourceCodeInfo();
        message.location = object.location?.map(e => exports.SourceCodeInfo_Location.fromPartial(e)) || [];
        return message;
    }
};
function createBaseSourceCodeInfo_Location() {
    return {
        path: [],
        span: [],
        leadingComments: "",
        trailingComments: "",
        leadingDetachedComments: []
    };
}
exports.SourceCodeInfo_Location = {
    typeUrl: "/google.protobuf.Location",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.span) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        for (const v of message.leadingDetachedComments) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                    }
                    else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leadingComments = reader.string();
                    break;
                case 4:
                    message.trailingComments = reader.string();
                    break;
                case 6:
                    message.leadingDetachedComments.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSourceCodeInfo_Location();
        if (Array.isArray(object?.path))
            obj.path = object.path.map((e) => Number(e));
        if (Array.isArray(object?.span))
            obj.span = object.span.map((e) => Number(e));
        if ((0, helpers_1.isSet)(object.leadingComments))
            obj.leadingComments = String(object.leadingComments);
        if ((0, helpers_1.isSet)(object.trailingComments))
            obj.trailingComments = String(object.trailingComments);
        if (Array.isArray(object?.leadingDetachedComments))
            obj.leadingDetachedComments = object.leadingDetachedComments.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map(e => Math.round(e));
        }
        else {
            obj.path = [];
        }
        if (message.span) {
            obj.span = message.span.map(e => Math.round(e));
        }
        else {
            obj.span = [];
        }
        message.leadingComments !== undefined && (obj.leadingComments = message.leadingComments);
        message.trailingComments !== undefined && (obj.trailingComments = message.trailingComments);
        if (message.leadingDetachedComments) {
            obj.leadingDetachedComments = message.leadingDetachedComments.map(e => e);
        }
        else {
            obj.leadingDetachedComments = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSourceCodeInfo_Location();
        message.path = object.path?.map(e => e) || [];
        message.span = object.span?.map(e => e) || [];
        message.leadingComments = object.leadingComments ?? "";
        message.trailingComments = object.trailingComments ?? "";
        message.leadingDetachedComments = object.leadingDetachedComments?.map(e => e) || [];
        return message;
    }
};
function createBaseGeneratedCodeInfo() {
    return {
        annotation: []
    };
}
exports.GeneratedCodeInfo = {
    typeUrl: "/google.protobuf.GeneratedCodeInfo",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.annotation) {
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGeneratedCodeInfo();
        if (Array.isArray(object?.annotation))
            obj.annotation = object.annotation.map((e) => exports.GeneratedCodeInfo_Annotation.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.annotation) {
            obj.annotation = message.annotation.map(e => e ? exports.GeneratedCodeInfo_Annotation.toJSON(e) : undefined);
        }
        else {
            obj.annotation = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGeneratedCodeInfo();
        message.annotation = object.annotation?.map(e => exports.GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
        return message;
    }
};
function createBaseGeneratedCodeInfo_Annotation() {
    return {
        path: [],
        sourceFile: "",
        begin: 0,
        end: 0
    };
}
exports.GeneratedCodeInfo_Annotation = {
    typeUrl: "/google.protobuf.Annotation",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.sourceFile = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGeneratedCodeInfo_Annotation();
        if (Array.isArray(object?.path))
            obj.path = object.path.map((e) => Number(e));
        if ((0, helpers_1.isSet)(object.sourceFile))
            obj.sourceFile = String(object.sourceFile);
        if ((0, helpers_1.isSet)(object.begin))
            obj.begin = Number(object.begin);
        if ((0, helpers_1.isSet)(object.end))
            obj.end = Number(object.end);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map(e => Math.round(e));
        }
        else {
            obj.path = [];
        }
        message.sourceFile !== undefined && (obj.sourceFile = message.sourceFile);
        message.begin !== undefined && (obj.begin = Math.round(message.begin));
        message.end !== undefined && (obj.end = Math.round(message.end));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGeneratedCodeInfo_Annotation();
        message.path = object.path?.map(e => e) || [];
        message.sourceFile = object.sourceFile ?? "";
        message.begin = object.begin ?? 0;
        message.end = object.end ?? 0;
        return message;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2RlYy9nb29nbGUvcHJvdG9idWYvZGVzY3JpcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREEsOEVBNkRDO0FBQ0QsMEVBMENDO0FBUUQsZ0ZBZ0JDO0FBQ0QsNEVBWUM7QUFXRCw0RUFnQkM7QUFDRCx3RUFZQztBQVFELGdFQWdCQztBQUNELDREQVlDO0FBVUQsa0VBZ0JDO0FBQ0QsOERBWUM7QUFjRCx3RkFnQkM7QUFDRCxvRkFZQztBQTVWRCxvQkFBb0I7QUFDcEIsMkNBQWtHO0FBQ2xHLHdEQUEwQztBQUU3QixRQUFBLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztBQUNqRCxJQUFZLHlCQTBDWDtBQTFDRCxXQUFZLHlCQUF5QjtJQUNuQzs7O09BR0c7SUFDSCx1RkFBZSxDQUFBO0lBQ2YscUZBQWMsQ0FBQTtJQUNkOzs7T0FHRztJQUNILHFGQUFjLENBQUE7SUFDZCx1RkFBZSxDQUFBO0lBQ2Y7OztPQUdHO0lBQ0gscUZBQWMsQ0FBQTtJQUNkLHlGQUFnQixDQUFBO0lBQ2hCLHlGQUFnQixDQUFBO0lBQ2hCLG1GQUFhLENBQUE7SUFDYix1RkFBZSxDQUFBO0lBQ2Y7Ozs7O09BS0c7SUFDSCxzRkFBZSxDQUFBO0lBQ2YsaURBQWlEO0lBQ2pELDBGQUFpQixDQUFBO0lBQ2pCLHFDQUFxQztJQUNyQyxzRkFBZSxDQUFBO0lBQ2Ysd0ZBQWdCLENBQUE7SUFDaEIsb0ZBQWMsQ0FBQTtJQUNkLDRGQUFrQixDQUFBO0lBQ2xCLDRGQUFrQixDQUFBO0lBQ2xCLDBDQUEwQztJQUMxQyx3RkFBZ0IsQ0FBQTtJQUNoQiwwQ0FBMEM7SUFDMUMsd0ZBQWdCLENBQUE7SUFDaEIsMEZBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQTFDVyx5QkFBeUIseUNBQXpCLHlCQUF5QixRQTBDcEM7QUFDRCxT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QUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFLENBQUM7WUFD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TyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELEtBQUssTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUMsMkJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxD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