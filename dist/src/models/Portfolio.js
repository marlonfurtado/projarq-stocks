"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import Customer from './Customer'
// import Asset from './Asset'
const Schema = mongoose_1.default.Schema;
const PortfolioSchema = new Schema({
    description: { type: String, required: true, max: 100 },
});
exports.default = mongoose_1.default.model('Portfolio', PortfolioSchema);
