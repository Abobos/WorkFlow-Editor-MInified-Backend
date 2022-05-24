import { Workflow } from "../../src/controllers/types";
import UniversalModel from "../../src/models";
import WorkflowService from "../../src/services/workflow";

const workflowTable = new UniversalModel("WorkflowData");

const input: Workflow = {
  name: "Pipette Apparatus",
  version: 1,
  scope: "IT",
  apparatus: ["Burrette", "Pippette"],
  definitions: [
    {
      name: "Pipette",
      description: "used for measuring",
    },
  ],
  procedures: [
    {
      step: "Boil Rice",
    },
    { step: "Cook", substeps: ["jjjjj", "jjkjkkjk"] },
  ],
};

export class WorkflowFixture {
  static async seed() {
    await WorkflowService.saveWorkflow(input);
  }

  static async destroy() {
    await workflowTable.truncate();
  }
}
