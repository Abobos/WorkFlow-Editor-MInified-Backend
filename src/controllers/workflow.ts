import { response } from '../utils/index';

import { Request, Response, NextFunction } from 'express';
import WorkflowService from '../services/workflow';

class WorkflowController {
  static async getWorkflows(_req: Request, res: Response, next: NextFunction) {
    try {
      const result = await WorkflowService.getWorkflows();

      response.sendSuccessResponse(
        res,
        200,
        'workflows retrieved successfully',
        result
      );
    } catch (error) {
      return next(error);
    }
  }

  static async saveWorkflow(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await WorkflowService.saveWorkflow(req.body);

      response.sendSuccessResponse(
        res,
        201,
        'workflow saved successfully',
        result
      );
    } catch (error) {
      return next(error);
    }
  }
}

export default WorkflowController;
