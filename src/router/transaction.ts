import * as express from "express"
import TransactionFactory from "../controllers/transactions/TransactionFactory"
import ITransaction from "../controllers/transactions/ITransaction"
const router = express.Router()

// create a transaction
router.post('/', TransactionFactory.create)

//Return all transactions
router.get('/', ITransaction.getAll)

//Return a transaction by ID
router.get('/:id', ITransaction.getById)

export default router
