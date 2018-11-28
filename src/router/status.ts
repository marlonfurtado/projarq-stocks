import { Request, Response, NextFunction } from "express"
import * as express from "express"
const router = express.Router()

// test route
router.get('/', (req: Request, res: Response) => {
  res.status(200).send({ status: 200, message: 'Server running.' })
})

export default router
