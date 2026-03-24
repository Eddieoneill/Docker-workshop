const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const cardsRoutes = require("./routes/cards");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/cards", cardsRoutes);

app.get("/", (req, res) => {
  res.status(200).send({ message: "My API is up and running Yo!" });
});

app.listen(port, () => {
  console.log(`Your server is running on port: localhost:${port}`);
});
