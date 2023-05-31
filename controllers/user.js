const userModel = require("../models/users");

const getUsers = (req, res) => {
  userModel
    .find({})
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500).send({ message: "Recurso solicitado no encontrado" });
    });
};

const getUsersId = (req, res) => {
  const { id } = req.params;

  userModel
    .findById(id)
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500).send({ message: "Recurso solicitado no encontrado" });
    });
};

 const postUser = (req,res) => {
   const { name, about, avatar } = req.body;

  userModel
    .create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500).send({ mensaje: "ocurrio un errore checalo" });
    });
};
 const delateUser = (req,res) => {

  userModel
    .findByIdAndDelete({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500).send({ mensaje: "ocurrio un errore checalo" });
    });
};
module.exports = {
  getUsers,
  getUsersId,
  postUser,
};
