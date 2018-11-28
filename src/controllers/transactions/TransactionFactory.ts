import { Request, Response, NextFunction } from "express"
import { Buy } from './Buy'
import { Sell } from './Sell'

export default class TransactionFactory {
  public static create(req: Request, res: Response, next: NextFunction) {
    const transactionType = String(req.body.type).toLowerCase()
    const amount = req.body.amount
    const product = req.body.product
    const customer = req.body.customer
    const portfolio = req.body.portfolio

    switch (transactionType) {
      case 'buy':
        const buy = new Buy(amount, product, customer, portfolio)
        buy.create((err: Error, transaction: Object) => {
          if (err) return res.status(500).send({ error: err })

          return res.send(transaction)
        })

      case 'sell':
        const sell = new Sell(amount, product, customer, portfolio)
        sell.create((err: Error, transaction: Object) => {
          if (err) return res.status(500).send({ error: err })

          return res.send(transaction)
        })

      case 'transfer':
      return null // TODO

      default:
        res.status(400).send({ error: 'Transaction type not found.' })
    }

  }
}
