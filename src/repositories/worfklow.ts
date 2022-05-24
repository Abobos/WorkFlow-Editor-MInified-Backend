import UniversalModel from "../models/index";

class WorkflowDataRepository {
  private table = "WorkflowData";
  public stockDataRepository: UniversalModel;
  static instance: WorkflowDataRepository;

  constructor() {
    this.stockDataRepository = new UniversalModel(this.table);
  }

  async create(column: string, values: string) {
    try {
      const result = await this.stockDataRepository.insert({
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
      const result = await this.stockDataRepository.select({
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
