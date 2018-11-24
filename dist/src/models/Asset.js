"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AssetSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    asset: { type: String, required: true, max: 16 },
    last: { type: String, required: true, default: "0", max: 9 },
    buy: { type: String, required: true, default: "0", max: 9 },
    sell: { type: String, required: true, default: "0", max: 9 },
    variation: { type: String, required: true, default: "0", max: 9 },
});
exports.default = mongoose_1.default.model('Asset', AssetSchema);
