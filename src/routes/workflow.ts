import WorkflowController from "../controllers/workflow";
import { Router } from "express";

const workflowRouter = Router();

workflowRouter.post("/workflows", WorkflowController.saveWorkflow);

workflowRouter.get("/workflows", WorkflowController.getWorkflows);

export default workflowRouter;
