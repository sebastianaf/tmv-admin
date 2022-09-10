import { Sequelize } from "sequelize";
import { dbData } from "../config/db";
import { setupModels } from "./models";

/**
 * ------------------------ [ DATABASE 01 - DATA ] ------------------------
 */
const sequelize = new Sequelize(dbData.database, dbData.user, dbData.password, {
  dialect: "postgres",
  logging: false,
  host: dbData.host,
  port: dbData.port,
  timezone: "America/Bogota",
});

/**
 * Setup the models to Sequelize
 */
console.log(`-----------Septing up models-----------`);
setupModels(sequelize);

/**
 * Sync the models with the database
 */
console.log(`-----------Syncing models-----------`);
sequelize.sync({ force: true });

export default sequelize;
