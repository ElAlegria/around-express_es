const routerUsers = require("express").Router();
const {
  getUsersAll,
  getUserId,
  createUser,
  updateUser,
  updateAvatar,
} = require("../controllers/user");

routerUsers.get("/", getUsersAll);
routerUsers.get("/:id", getUserId);
routerUsers.post("/", createUser);
routerUsers.patch("/me", updateUser);
routerUsers.patch("/me/avatar", updateAvatar);

module.exports = routerUsers;
