"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const TransactionFactory_1 = __importDefault(require("../controllers/transactions/TransactionFactory"));
const ITransaction_1 = __importDefault(require("../controllers/transactions/ITransaction"));
const router = express.Router();
// create a transaction
router.post('/', TransactionFactory_1.default.create);
//Return all transactions
router.get('/', ITransaction_1.default.getAll);
//Return a transaction by ID
router.get('/:id', ITransaction_1.default.getById);
exports.default = router;
