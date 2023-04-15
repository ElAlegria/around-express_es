const routerUsers = require("express").Router();
const fsPromise = require("fs").promises;
const path = require("path");

const USERS__PATH = path.join(__dirname, "../data/users.json");
routerUsers.get("/", (req, res) => {
  fsPromise
    .readFile(USERS__PATH, { encoding: "utf-8" })
    .then((users) => {
      res.send({ data: JSON.parse(users) });
    })
    .catch(() => {
      res.status(404).send({ message: "Recurso solicitado no encontrado" });
    });
});

routerUsers.get("/:_id", (req, res) => {
  fsPromise.readFile(USERS__PATH, { encoding: "utf-8" }).then((users) => {
    const parsedUsersData = JSON.parse(users);
    const user = parsedUsersData.find((user) => user._id === req.params._id);
    if (!user) {
      res.status(404).send({ message: "Usuario no encontrado" });
    } else {
      res.send({ data: user });
    }
  });
});
module.exports = routerUsers;
