"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = __importDefault(require("../../models/Transaction"));
class ITransaction {
    constructor(type, amount, product, customer, portfolio) {
        this.type = type;
        this.amount = amount;
        this.product = product;
        this.customer = customer;
        this.portfolio = portfolio;
    }
    create(req, res, next) { }
    static getAll(req, res, next) {
        Transaction_1.default.find({}, (err, transactions) => {
            if (err)
                return next(err);
            res.send(transactions);
        });
    }
    static getById(req, res, next) {
        const transactionId = req.params.id;
        Transaction_1.default.findById(transactionId, (err, transaction) => {
            if (err)
                return next(err);
            res.send(transaction);
        });
    }
}
exports.default = ITransaction;
