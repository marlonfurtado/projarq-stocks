"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Asset_1 = __importDefault(require("./Asset"));
const Portfolio_1 = __importDefault(require("./Portfolio"));
const Schema = mongoose_1.default.Schema;
const TransactionSchema = new Schema({
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    portfolio: { type: Schema.Types.ObjectId, ref: Portfolio_1.default },
    product: [{
            asset: { type: Schema.Types.ObjectId, ref: Asset_1.default, required: true },
            total: { type: Number }
        }]
});
exports.default = mongoose_1.default.model('Transaction', TransactionSchema);
