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
const AssetsController = __importStar(require("../controllers/assets/Assets"));
const router = express.Router();
//Return all assets
router.get('/', AssetsController.getAll);
// Return a asset by ID
router.get('/:id', AssetsController.getById);
exports.default = router;
