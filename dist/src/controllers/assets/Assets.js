"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asset_1 = __importDefault(require("../../models/Asset"));
function getAll(req, res, next) {
    Asset_1.default.find({}, (err, assets) => {
        if (err)
            return next(err);
        res.send(assets);
    });
}
exports.getAll = getAll;
function getById(req, res, next) {
    const assetId = req.params.id;
    Asset_1.default.findById(assetId, (err, asset) => {
        if (err)
            return next(err);
        res.send(asset);
    });
}
exports.getById = getById;
