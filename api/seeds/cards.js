/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("cards").del();
  await knex("cards").insert([
    {
      card_name: "back",
      card_number: "",
      card_suit: "",
      image: "https://deckofcardsapi.com/static/img/back.png",
    },
  ]);
};
