"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ITransaction_1 = __importDefault(require("./ITransaction"));
const Transaction_1 = __importDefault(require("../../models/Transaction"));
class Buy extends ITransaction_1.default {
    constructor(amount, product, customer, portfolio) {
        super("BUY", amount, product, customer, portfolio);
    }
    create(callback) {
        const transaction = new Transaction_1.default({
            type: this.type,
            amount: this.amount,
            customer: this.customer,
            portfolio: this.portfolio,
            product: this.product
        });
        transaction.save((err, transaction) => {
            if (err)
                return err;
            return transaction;
        });
    }
}
exports.Buy = Buy;
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
