"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Buy_1 = require("./Buy");
const Sell_1 = require("./Sell");
class TransactionFactory {
    static create(req, res, next) {
        const transactionType = req.body.type;
        const amount = req.body.amount;
        const product = req.body.product;
        const customer = req.body.customer;
        const portfolio = req.body.portfolio;
        switch (transactionType) {
            case 'buy':
                const buy = new Buy_1.Buy(amount, product, customer, portfolio);
                return res.send(buy.create());
            case 'sell':
                const sell = new Sell_1.Sell(amount, product, customer, portfolio);
                return res.send(sell.create());
            case 'transfer':
                return null; // TODO
            default:
                throw new Error('Transaction type not found.');
        }
    }
}
exports.default = TransactionFactory;
