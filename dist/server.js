"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
// DATABASE
const mongoDB = process.env.MONGODB_URI || "";
console.log('PROCESS:  ', process.env);
mongoose_1.default.connect(mongoDB, { useNewUrlParser: true });
mongoose_1.default.Promise = global.Promise;
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// SERVER
const server = express_1.default();
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
// ROUTES
const assets_1 = __importDefault(require("./src/router/assets"));
const portfolio_1 = __importDefault(require("./src/router/portfolio"));
const transaction_1 = __importDefault(require("./src/router/transaction"));
const customer_1 = __importDefault(require("./src/router/customer"));
server.use('/assets', assets_1.default);
server.use('/portfolio', portfolio_1.default);
server.use('/transaction', transaction_1.default);
server.use('/customer', customer_1.default);
server.listen(3000, function () {
    console.log('Running on port 3000');
});
