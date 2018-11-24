import * as express from "express"
import * as AssetsController from "../controllers/assets/Assets"
const router = express.Router()

//Return all assets
router.get('/', AssetsController.getAll)

// Return a asset by ID
router.get('/:id', AssetsController.getById)

export default router
