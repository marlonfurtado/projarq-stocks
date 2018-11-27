"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Portfolio_1 = __importDefault(require("./Portfolio"));
const Transaction_1 = __importDefault(require("./Transaction"));
const Schema = mongoose_1.default.Schema;
const CustomerSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    login: { type: String, required: true, max: 16 },
    password: { type: String, required: true, max: 16 },
    portfolios: [{ type: Schema.Types.ObjectId, ref: Portfolio_1.default }],
    transactions: [{ type: Schema.Types.ObjectId, ref: Transaction_1.default }]
});
exports.default = mongoose_1.default.model('Customer', CustomerSchema);
