import { Request, Response, NextFunction } from "express"
import { Buy } from './Buy'
import { Sell } from './Sell'

export default class TransactionFactory {
  public static create(req: Request, res: Response, next: NextFunction) {
    const transactionType = req.body.type
    const amount = req.body.amount
    const product = req.body.product
    const customer = req.body.customer
    const portfolio = req.body.portfolio

    switch (transactionType) {
      case 'buy':
        const buy = new Buy(amount, product, customer, portfolio)
        return res.send(buy.create())

      case 'sell':
        const sell = new Sell(amount, product, customer, portfolio)
        return res.send(sell.create())

      case 'transfer':
      return null // TODO

      default:
        throw new Error('Transaction type not found.');
    }

  }
}
