const url = "https://deckofcardsapi.com/static/img/0S.png";

const numbers = [
  "0",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
  "A",
];
const suits = ["S", "D", "C", "H"];

const objs = [
  {
    card_name: "back",
    card_number: "",
    card_suit: "",
    image: "https://deckofcardsapi.com/static/img/back.png",
  },
];

numbers.forEach((number) => {
  suits.forEach((suit) => {
    objs.push({
      card_name: number + suit,
      card_number: number,
      card_suit: suit,
      image: `https://deckofcardsapi.com/static/img/${number}${suit}.png`,
    });
  });
});

module.exports = { objs };
