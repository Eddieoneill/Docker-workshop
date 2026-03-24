const express = require("express");
const { getAll } = require("../controllers/cardController");

const router = express();

router.get("/", getAll);

module.exports = router;
