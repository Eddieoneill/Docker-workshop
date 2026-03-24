const db = require("../db/db");

const getAll = async (req, res) => {
  try {
    const result = await db("cards").select("*");
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getAll };
