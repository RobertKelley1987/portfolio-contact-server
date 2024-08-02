import { Router } from "express";
import { sendContactForm } from "../controllers/contact";

const router = Router();
router.post("/", sendContactForm);

export default router;
