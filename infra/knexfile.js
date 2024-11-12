/* eslint-disable no-undef */
require("dotenv").config({ path: "../.env" });

module.exports = {
  client: "mysql2",
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
