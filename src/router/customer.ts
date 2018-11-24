import * as express from "express"
import * as CustomerController from "../controllers/customer/Customer"
const router = express.Router()

// Return customer with login
router.get('/', CustomerController.getCustomer)

// Return a customer by ID
router.get('/:id', CustomerController.getById)

export default router
