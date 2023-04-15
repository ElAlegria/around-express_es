const routerCards = require("express").Router();
const fsPromise = require("fs").promises;
const path = require("path");

const CARDS_PATH = path.join(__dirname, "../data/cards.json");
routerCards.get("/", (req, res) => {
  fsPromise
    .readFile(CARDS_PATH, { encoding: "utf-8" })
    .then((card) => {
      res.send({ data: JSON.parse(card) });
    })
    .catch(() => {
      res.status(404).send({ message: "Recurso solicitado no encontrado" });
    });
});

module.exports = routerCards;
