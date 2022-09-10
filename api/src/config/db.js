require("dotenv").config();

const dbUsers = {
  host: process.env.DB_USERS_HOST,
  port: process.env.DB_USERS_PORT,
  user: process.env.DB_USERS_USER,
  password: process.env.DB_USERS_PASSWORD,
  database: process.env.DB_USERS_DATABASE,
};

const dbData = {
  host: process.env.DB_DATA_HOST,
  port: process.env.DB_DATA_PORT,
  user: process.env.DB_DATA_USER,
  password: process.env.DB_DATA_PASSWORD,
  database: process.env.DB_DATA_DATABASE,
};

export { dbUsers, dbData };
