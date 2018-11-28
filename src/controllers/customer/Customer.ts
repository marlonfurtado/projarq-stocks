import { Request, Response, NextFunction } from "express"
import Customer from '../../models/Customer'

export function getAll(req: Request, res: Response, next: NextFunction) {
  Customer.find({}, (err: Error, customer: any) => {
    if (err) return next(err)

    res.send(customer)
  })
}

export function getByLogin(req: Request, res: Response, next: NextFunction) {
  const login = req.params.login
  Customer.findOne({ login: login }, (err: Error, customer: any) => {
    if (err) return next(err)

    res.send(customer)
  })
}

export function getById(req: Request, res: Response, next: NextFunction) {
  const customerId = req.params.id
  Customer.findById(customerId, (err: Error, customer: any) => {
    if (err) return next(err)

    res.send(customer)
  })
}
