"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("../../models/Customer"));
function getAll(req, res, next) {
    Customer_1.default.find({}, (err, customer) => {
        if (err)
            return next(err);
        res.send(customer);
    });
}
exports.getAll = getAll;
function getByLogin(req, res, next) {
    const login = req.params.login;
    Customer_1.default.findOne({ login: login }, (err, customer) => {
        if (err)
            return next(err);
        res.send(customer);
    });
}
exports.getByLogin = getByLogin;
function getById(req, res, next) {
    const customerId = req.params.id;
    Customer_1.default.findById(customerId, (err, customer) => {
        if (err)
            return next(err);
        res.send(customer);
    });
}
exports.getById = getById;
