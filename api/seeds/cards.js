const { objs: cardsObj } = require("../fetch/fetchCards");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cards").del();
  await knex("cards").insert(cardsObj);
};
