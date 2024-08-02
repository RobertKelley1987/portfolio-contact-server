"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contact_1 = __importDefault(require("./routes/contact"));
const error_handler_1 = require("./error-handler");
// General config
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:8000",
}));
// Config routes
app.use("/contact", contact_1.default);
// Add error handler
app.use(error_handler_1.errorHandler);
// Start app
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`The app listens on port ${port}`));
