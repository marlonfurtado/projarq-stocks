"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ITransaction_1 = __importDefault(require("./ITransaction"));
const Transaction_1 = __importDefault(require("../../models/Transaction"));
class Sell extends ITransaction_1.default {
    constructor(amount, product, customer, portfolio) {
        super("SELL", amount, product, customer, portfolio);
    }
    create() {
        const transaction = new Transaction_1.default({
            type: super.type,
            amount: super.amount,
            customer: super.customer,
            portfolio: super.portfolio,
            product: super.product
        });
        transaction.save((err, transaction) => {
            if (err)
                return err;
            // TODO: remove from portfolio
            return transaction;
        });
    }
}
exports.Sell = Sell;
/**
 * Minha carteira
 * Saldo
 * Todos ativos (nome, e valor unitario, quantidade)
 *
 *
 * Ativos
 * Lista de produtos (botao de compra)
 *
 *
 * Transações
 * Lista com transaçõesde cada ativo
 * Vende ativo
 * Compra ativo
 *
 */
