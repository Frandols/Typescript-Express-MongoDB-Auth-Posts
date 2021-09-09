"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var logger_1 = __importDefault(require("./logger"));
var connect_1 = __importDefault(require("./db/connect"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
// @ts-ignore
var port = process.env.PORT || 3000;
var host = process.env.HOST;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(port, host, function () {
    logger_1.default.info("Server listening at http://" + host + ":" + port);
    (0, connect_1.default)();
    (0, routes_1.default)(app);
});
