"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = require("./lib/errors");
const errorHandler = (error, req, res, next) => {
    if (error instanceof errors_1.ExpressError) {
        return res.status(error.statusCode).send({ message: error.message });
    }
    const statusCode = (error === null || error === void 0 ? void 0 : error.code) || 500;
    res.status(statusCode).send({ message: error.message });
};
exports.errorHandler = errorHandler;
