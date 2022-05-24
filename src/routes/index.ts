import { Router, Request, Response } from "express";

import { response } from "../utils/index";
import workflowRouter from "./workflow";

const router = Router();

router.get("/", (_req: Request, res: Response) =>
  response.sendSuccessResponse(
    res,
    200,
    "Welcome to WorkFlow Editor API Service"
  )
);

router.use("/api/v1", workflowRouter);

router.all("*", (_req: Request, res: Response) =>
  response.sendErrorResponse(
    res,
    404,
    "This route is unavailable on the server"
  )
);

export default router;
