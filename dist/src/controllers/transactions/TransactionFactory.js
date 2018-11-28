"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Buy_1 = require("./Buy");
const Sell_1 = require("./Sell");
class TransactionFactory {
    static create(req, res, next) {
        const transactionType = String(req.body.type).toLowerCase();
        const amount = req.body.amount;
        const product = req.body.product;
        const customer = req.body.customer;
        const portfolio = req.body.portfolio;
        switch (transactionType) {
            case 'buy':
                const buy = new Buy_1.Buy(amount, product, customer, portfolio);
                buy.create((err, transaction) => {
                    if (err)
                        return res.status(500).send({ error: err });
                    return res.send(transaction);
                });
            case 'sell':
                const sell = new Sell_1.Sell(amount, product, customer, portfolio);
                sell.create((err, transaction) => {
                    if (err)
                        return res.status(500).send({ error: err });
                    return res.send(transaction);
                });
            case 'transfer':
                return null; // TODO
            default:
                res.status(400).send({ error: 'Transaction type not found.' });
        }
    }
}
exports.default = TransactionFactory;
