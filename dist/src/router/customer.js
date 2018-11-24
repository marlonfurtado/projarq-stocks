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
const CustomerController = __importStar(require("../controllers/customer/Customer"));
const router = express.Router();
// Return customer with login
router.get('/', CustomerController.getCustomer);
// Return a customer by ID
router.get('/:id', CustomerController.getById);
exports.default = router;
