import db from "../config/pool";
import { logger } from "../utils/index";

const workFlowData = `
  DROP TABLE IF EXISTS WorkFlowData CASCADE;
  CREATE TABLE WorkFlowData(
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   scope TEXT NOT NULL,
   definitions TEXT NOT NULL,
   apparatus TEXT NOT NULL,
   procedure jsonb NOT NULL,
   created_at DATE NOT NULL DEFAULT CURRENT_DATE
  );`;

(async function migrate() {
  try {
    await db.query(`${workFlowData}`);

    logger.appLogger.info("migration: database table created");

    process.exit();
  } catch (err: any) {
    logger.appLogger.error(
      `migration-error:database ${err.message}: Table not created`
    );

    process.exit(1);
  }
})();
