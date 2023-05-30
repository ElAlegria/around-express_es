const routerUsers = require("express").Router();
const { getUsers, getUsersId, postUser } = require("../controllers/user");

routerUsers.get("/", getUsers);
routerUsers.get("/:id", getUsersId);
routerUsers.post("/", postUser);

module.exports = routerUsers;
