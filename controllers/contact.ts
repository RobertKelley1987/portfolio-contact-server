import { sendEmail } from "../lib/email";
import { ExpressError } from "../lib/errors";
import type { Request, Response } from "express";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Helper to print html email body
function printFormData(formData: ContactForm) {
  return `\nName: ${formData.name}\n
    Email: ${formData.email}\n
    Subject: ${formData.subject}\n
    Message: ${formData.message}`;
}

export async function sendContactForm(req: Request, res: Response) {
  const { formData } = req.body;
  if (!formData) {
    throw new ExpressError(500, "Failed to send form data.");
  }

  const html = printFormData(formData);
  await sendEmail(html);
  res.status(200).send({ message: "success" });
}
