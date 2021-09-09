"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var mongoose_1 = __importDefault(require("mongoose"));
var logger_1 = __importDefault(require("../logger"));
function connect() {
    var dbUri = process.env.DB_URI;
    return mongoose_1.default
        .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .then(function () {
        logger_1.default.info("Database connected");
    })
        .catch(function (error) {
        logger_1.default.error("Database error", error);
        process.exit(1);
    });
}
exports.default = connect;
