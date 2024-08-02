"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactForm = sendContactForm;
const email_1 = require("../lib/email");
const errors_1 = require("../lib/errors");
// Helper to print html email body
function printFormData(formData) {
    return `\nName: ${formData.name}\n
    Email: ${formData.email}\n
    Subject: ${formData.subject}\n
    Message: ${formData.message}`;
}
function sendContactForm(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { formData } = req.body;
        if (!formData) {
            throw new errors_1.ExpressError(500, "Failed to send form data.");
        }
        const html = printFormData(formData);
        yield (0, email_1.sendEmail)(html);
        res.status(200).send({ message: "success" });
    });
}
