"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
// DATABASE
const dev_db_url = 'mongodb://marlonfurtado:stockskurtz123@ds115664.mlab.com:15664/stocks-kurtz';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose_1.default.connect(mongoDB, { useNewUrlParser: true });
mongoose_1.default.Promise = global.Promise;
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// SERVER
const server = express_1.default();
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
// ROUTES
const customer_1 = __importDefault(require("./src/router/customer"));
const assets_1 = __importDefault(require("./src/router/assets"));
server.use('/customer', customer_1.default);
// server.use('/portfolio', portfolio)
server.use('/assets', assets_1.default);
server.listen(3000, function () {
    console.log('Running on port 3000');
});
