import { logger } from '../utils';
import { WorkflowDto } from '../controllers/types';

import WorkflowRepository from '../repositories/workflow';

class WorkflowService {
  static async getWorkflows() {
    try {
      const column =
        'id, name, version, scope, apparatus, definitions, procedures';

      const result = (await WorkflowRepository.findAll(
        column
      )) as WorkflowDto[];

      return result;
    } catch (error) {
      logger.appLogger.error('An error occurred', error);
      throw error;
    }
  }

  static async saveWorkflow(data: WorkflowDto) {
    try {
      const column = 'name, version, scope, apparatus, definitions, procedures';

      const values = `'${data.name}', ${data.version}, '${
        data.scope
      }', '${JSON.stringify(data.apparatus)}', '${JSON.stringify(
        data.definitions
      )}', '${JSON.stringify(data.procedures)}'`;

      return await WorkflowRepository.create(column, values);
    } catch (error) {
      logger.appLogger.error('An error occurred', error);

      throw error;
    }
  }
}

export default WorkflowService;
