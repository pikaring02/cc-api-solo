/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('yearlyOtoshidama').del()
  await knex('yearlyOtoshidama').insert([
    {id: 2001, year: '2021', kingaku: '10001'},
    {id: 2002, year: '2022', kingaku: '20000'},
    {id: 2003, year: '2023', kingaku: '30000'}
  ]);
};
