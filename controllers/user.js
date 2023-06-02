const userModel = require("../models/users");

function orFailUser() {
  const error = new Error("no se ha encontrado ningun usuario");
  error.statusCode = 404;
  throw error;
}

function errorMessagesUsers(err, res) {
  if (err.name === "ValidationError") {
    res.status(400).send({ message: "Datos inválidos" });
  } else if (err.name === "CastError") {
    res.status(400).send({ message: "ID de usuario no válido" });
  } else if (err.statusCode === 404) {
    res.status(404).send({ message: "ID de tarjeta no encontrado" });
  } else {
    res.status(500).send({ message: "Ha ocurrido un error en el servidor" });
  }
}

const getUsersAll = (req, res) => {
  userModel
    .find({})
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(404).send({ message: "Recurso solicitado no encontrado" });
    });
};

const getUserId = (req, res) => {
  const { id } = req.params;

  userModel
    .findById(id)
    .orFail(orFailUser)
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  userModel
    .create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  userModel
    .findByIdAndUpdate(req.user._id, { name, about })
    .orFail(orFailUser)
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  userModel
    .findByIdAndUpdate(req.user._id, { avatar })
    .orFail(orFailUser)
    .then((user) => res.send({ data: user }))
    .catch((err) => errorMessagesUsers(err, res));
};
module.exports = {
  getUsersAll,
  getUserId,
  createUser,
  updateUser,
  updateAvatar,
};
