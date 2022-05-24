import db from "../config/pool";
import { logger } from "../utils/index";

const workflowData = `
  DROP TABLE IF EXISTS WorkflowData CASCADE;
  CREATE TABLE WorkflowData(
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   version NUMERIC NOT NULL,
   scope TEXT NOT NULL,
   definitions TEXT NOT NULL,
   apparatus TEXT NOT NULL,
   procedures TEXT NOT NULL,
   created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );`;

(async function migrate() {
  try {
    await db.query(`${workflowData}`);

    logger.appLogger.info("migration: database table created");

    process.exit();
  } catch (err: any) {
    logger.appLogger.error(
      `migration-error:database ${err.message}: Table not created`
    );

    process.exit(1);
  }
})();
