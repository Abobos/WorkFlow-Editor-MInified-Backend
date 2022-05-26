import db from '../config/pool';
import { logger } from '../utils/index';

const seedData = `INSERT INTO WorkflowData (name, version, scope, apparatus, definitions, procedures) 
VALUES ('Routine Pipette Check and Calibration', 1, 'This procedure is to be used for demonstrations of automatic calibration and documentation.', 
'["Pipettor", "Cubis Analytical balance", "Pipette tips", "Beaker", "Distilled water"]', 
'[
  {"name":"Pipette","description":"Pipettes are used to transfer or measure set volumes of liquid"},
  {"name":"Pipette tip","description":"Pipette tips are disposable, attachments for the uptake and dispensing of liquids using a pipette."}]', 
'[
  {"step":"Prepare balance", "substeps": ["Place a beaker with 1000ul of distilled H20 on the balance and tare"]},
  {"step":"Place a new pipette tip on the pipettor"},
  {"step":"Weigh the pipettes at 100% volume five times","substeps": [
    "Aspirate and dispense 100% of the volume into the beaker",
    "Record the weight in the table in step 6.4",
    "Tare the balance",
    "Repeat steps 6.3.1 to 6.3.3 four more times"
  ]},
  {"step":"Record Weight of water from previous in a tabular form"},
  {"step":"Calculate Mean, Std. Deviation, Accuracy and Precision in a tabular form"}
]')
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
