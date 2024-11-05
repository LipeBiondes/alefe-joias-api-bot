/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("services_flow", (table) => {
    table.increments("id").primary();
    table.integer("numbering").notNullable().unique();
    table.string("service_name").notNullable();
    table.text("description").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("services_flow");
};
