import * as express from "express"
import * as PortfolioController from "../controllers/portfolio/Portfolio"
const router = express.Router()

// Return a portfolio by ID
router.get('/:id', PortfolioController.getById)

// Return a portfolio from customer
router.get('/:customer', PortfolioController.getByCustomer)

export default router
