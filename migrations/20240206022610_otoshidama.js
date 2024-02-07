/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("yearlyOtoshidama", function (table) {
    table.increments("id").primary();
    table.string("year", 32).unique().notNullable().index();
    table.integer("kingaku").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("yearlyOtoshidama");
};
