import ITransaction from "./ITransaction"
import Transaction from "../../models/Transaction"

export class Buy extends ITransaction {
  constructor(amount: Number, product: Object, customer: any, portfolio: any) {
    super("BUY", amount, product, customer, portfolio)
  }

  create() {
    const transaction = new Transaction({
      type: super.type,
      amount: super.amount,
      customer: super.customer,
      portfolio: super.portfolio,
      product: super.product
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
