"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BuyOrder {
    constructor(id, amount, asset, status) {
        this.ORDER_TYPE = 'BUY';
        this.id = id;
        this.amount = amount;
        this.asset = asset;
        this.status = status;
        this.type = this.ORDER_TYPE;
    }
}
function buy() {
    // TODO
}
exports.buy = buy;
function sell() {
    // TODO
}
exports.sell = sell;
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
