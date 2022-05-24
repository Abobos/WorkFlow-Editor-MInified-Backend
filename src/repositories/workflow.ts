import UniversalModel from "../models/index";

class WorkflowDataRepository {
  private table = "WorkflowData";
  public workflowDataRepository: UniversalModel;
  static instance: WorkflowDataRepository;

  constructor() {
    this.workflowDataRepository = new UniversalModel(this.table);
  }

  async create(column: string, values: string) {
    try {
      const result = await this.workflowDataRepository.insert({
        column,
        values,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  async findAll(column: string, condition?: string) {
    try {
      const result = await this.workflowDataRepository.select({
        column,
        condition,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  static getInstance() {
    if (WorkflowDataRepository.instance) {
      return WorkflowDataRepository.instance;
    }

    WorkflowDataRepository.instance = new WorkflowDataRepository();
    return WorkflowDataRepository.instance;
  }
}

export default WorkflowDataRepository.getInstance();
