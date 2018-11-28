import * as express from "express"
import * as CustomerController from "../controllers/customer/Customer"
const router = express.Router()

// Return all customers
router.get('/', CustomerController.getAll)

// Return customer with login
router.get('/:login', CustomerController.getByLogin)

// Return a customer by ID
router.get('/:id', CustomerController.getById)

export default router
