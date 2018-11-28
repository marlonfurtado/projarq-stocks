import { Request, Response, NextFunction } from "express"
import Transaction from "../../models/Transaction"

export default class ITransaction {
  type: String
  amount: Number
  product: Array<Object>
  customer: any
  portfolio: any

  constructor(type: String, amount: Number, product: Array<Object>, customer: any, portfolio: any) {
    this.type = type
    this.amount = amount
    this.product = product
    this.customer = customer
    this.portfolio = portfolio
  }

  create(callback: Function) { }

  static getAll(req: Request, res: Response, next: NextFunction) {
    Transaction.find({}, (err: Error, transactions: any) => {
      if (err) return next(err)

      res.send(transactions)
    })
  }

  static getById(req: Request, res: Response, next: NextFunction) {
    const transactionId = req.params.id
    Transaction.findById(transactionId, (err: Error, transaction: any) => {
      if (err) return next(err)

      res.send(transaction)
    })
  }
}
