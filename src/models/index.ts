import db from "../config/pool";

import { queryParamsII, queryParamsIII } from "./types";

import { logger } from "../utils/index";

class UniversalModel {
  private resource: string;

  constructor(table: string) {
    this.resource = table;
  }

  async insert(queryDetails: queryParamsII): Promise<any> {
    const queryStatement = `INSERT INTO ${this.resource} (${queryDetails.column}) 
                            VALUES (${queryDetails.values}) RETURNING *`;

    logger.appLogger.info(queryStatement);

    const { rows } = await db.query(queryStatement);

    return rows[0];
  }

  async select(queryDetails: queryParamsIII): Promise<any> {
    const queryStatement = `SELECT ${queryDetails.column} FROM ${this.resource}`;

    logger.appLogger.info(queryStatement);

    const { rows } = await db.query(queryStatement);

    return rows;
  }

  async truncate() {
    const queryStatement = `TRUNCATE TABLE ${this.resource}`;

    logger.appLogger.info(queryStatement);

    await db.query(queryStatement);
  }
}

export default UniversalModel;
