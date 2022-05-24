import { Response } from "express";

export const sendSuccessResponse = (
  res: Response,
  code: number,
  message: string,
  data?: any
) =>
  res.status(code).send({
    status: "success",
    message,
    data,
  });

export const sendErrorResponse = (
  res: Response,
  code: number,
  errorMessage: any
) =>
  res.status(code).send({
    status: "failure",
    error: errorMessage,
  });
