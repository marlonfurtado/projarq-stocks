"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const PortfolioController = __importStar(require("../controllers/portfolio/Portfolio"));
const router = express.Router();
// Return a portfolio by ID
router.get('/:id', PortfolioController.getById);
// Return a portfolio from customer
router.get('/:customer', PortfolioController.getByCustomer);
exports.default = router;
