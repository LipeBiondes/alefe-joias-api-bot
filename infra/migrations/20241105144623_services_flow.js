/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable("services_flow", (table) => {
    table.increments("id").primary();
    table.integer("numbering").notNullable();
    table.string("service_name").notNullable();
    table.string("description").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable("services_flow");
};
