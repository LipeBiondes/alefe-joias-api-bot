/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tickets", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("id").inTable("users");
    table.boolean("is_active").defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tickets");
};
