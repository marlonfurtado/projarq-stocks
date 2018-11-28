import ITransaction from "./ITransaction"
import Transaction from "../../models/Transaction"

export class Buy extends ITransaction {
  constructor(amount: Number, product: Array<Object>, customer: any, portfolio: any) {
    super("BUY", amount, product, customer, portfolio)
  }

  create(callback: Function) {
    const transaction = new Transaction({
      type: this.type,
      amount: this.amount,
      customer: this.customer,
      portfolio: this.portfolio,
      product: this.product
    })

    transaction.save((err: Error, transaction: Object) => {
      if (err) return err

      return transaction
    })
  }
}

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
