import { Workflow } from "../controllers/types";

import WorkflowRepository from "../repositories/workflow";

class WorkflowService {
  static async getWorkflows() {
    try {
      const column =
        "id, name, version, scope, apparatus, definitions, procedures";

      const result = (await WorkflowRepository.findAll(column)) as Workflow[];

      return result;
    } catch (error) {
      throw error;
    }
  }

  static async saveWorkflow(data: Workflow) {
    try {
      const column = "name, version, scope, apparatus, definitions, procedures";

      const values = `'${data.name}', ${data.version}, '${
        data.scope
      }', '${JSON.stringify(data.apparatus)}', '${JSON.stringify(
        data.definitions
      )}', '${JSON.stringify(data.procedures)}'`;

      return await WorkflowRepository.create(column, values);
    } catch (error) {
      throw error;
    }
  }
}

export default WorkflowService;
