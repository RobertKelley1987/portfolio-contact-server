import { ErrorRequestHandler } from "express";
import { ExpressError } from "./lib/errors";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ExpressError) {
    return res.status(error.statusCode).send({ message: error.message });
  }

  const statusCode = error?.code || 500;
  res.status(statusCode).send({ message: error.message });
};
