const routerUsers = require("express").Router();
const fsPromise = require("fs").promises;
const path = require("path");

const USERS__PATH = path.join(__dirname, "../data/users.json");
routerUsers.get("/", (req, res) => {
  fsPromise
    .readFile(USERS__PATH, { encoding: "utf-8" })
    .then((user) => {
      res.send({ data: JSON.parse(user) });
    })
    .catch(() => {
      res.status(404).send({ message: "Recurso solicitado no encontrado" });
    });
});

module.exports = routerUsers;
