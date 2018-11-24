import { Request, Response, NextFunction } from "express"
import Portfolio from '../../models/Portfolio'

export function getById(req: Request, res: Response, next: NextFunction) {
  const portfolioId = req.params.id
  Portfolio.findById(portfolioId, (err: Error, portfolio: any) => {
    if (err) return next(err)

    res.send(portfolio)
  })
}

export function getByCustomer(req: Request, res: Response, next: NextFunction) {
  const customerId = req.params.customer
  Portfolio.find({ customer:customerId }, (err: Error, portfolio: any) => {
    if (err) return next(err)

    res.send(portfolio)
  })
}
