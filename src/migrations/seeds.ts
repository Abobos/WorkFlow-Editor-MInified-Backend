import db from '../config/pool';
import { logger } from '../utils/index';

const seedData = `INSERT INTO WorkflowData (name, version, scope, apparatus, definitions, procedures) 
VALUES ('Pipette Apparatus', 1, 'IT', '["ppp","jjjd"]', '[{"name":"Pipette","description":"used for something"}]', 
'[{"step":"Boil Rice"},{"step":"Cook","substeps":["jjjjj","jjkjkkjk"]}]')
`;

(async function seed() {
  try {
    await db.query(`${seedData}`);

    logger.appLogger.info('migration: database seeded successfully');

    process.exit();
  } catch (err: any) {
    logger.appLogger.error(
      `migration-error:database ${err.message}: database not seeded`
    );

    process.exit(1);
  }
})();
