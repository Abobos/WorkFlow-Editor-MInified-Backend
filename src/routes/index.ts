import { Router, Request, Response } from "express";

import { response } from "@utils/index";

const router = Router();

router.get("/", (_req: Request, res: Response) =>
  response.sendSuccessResponse(res, 200, "Welcome to WorkFlow Data E Service")
);

router.all("*", (_req: Request, res: Response) =>
  response.sendErrorResponse(
    res,
    404,
    "This route is unavailable on the server"
  )
);

export default router;
