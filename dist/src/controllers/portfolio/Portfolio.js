"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Portfolio_1 = __importDefault(require("../../models/Portfolio"));
function getById(req, res, next) {
    const portfolioId = req.params.id;
    Portfolio_1.default.findById(portfolioId, (err, portfolio) => {
        if (err)
            return next(err);
        res.send(portfolio);
    });
}
exports.getById = getById;
function getByCustomer(req, res, next) {
    const customerId = req.params.customer;
    Portfolio_1.default.find({ customer: customerId }, (err, portfolio) => {
        if (err)
            return next(err);
        res.send(portfolio);
    });
}
exports.getByCustomer = getByCustomer;
