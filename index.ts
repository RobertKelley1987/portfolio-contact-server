import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact";
import { errorHandler } from "./error-handler";

// General config
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8000",
  })
);

// Config routes
app.use("/contact", contactRoutes);

// Add error handler
app.use(errorHandler);

// Start app
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`The app listens on port ${port}`));
