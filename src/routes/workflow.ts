import WorkflowController from '../controllers/workflow';
import { Router } from 'express';
import { validator } from '../middlewares/validate';

const workflowRouter = Router();

workflowRouter.post('/workflows', [validator, WorkflowController.saveWorkflow]);

workflowRouter.get('/workflows', WorkflowController.getWorkflows);

export default workflowRouter;
