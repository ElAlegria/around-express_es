const express = require("express");
const mongoose = require("mongoose");
const { PORT = 3000 } = process.env;
const userCards = require("./routes/cards");
const userUsers = require("./routes/users");
const app = express();
const bodyParse = require("body-parser");

mongoose
  .connect("mongodb://127.0.0.1:27017/aroundb")
  .then(() => console.log("conexion exitosa mi apa"))
  .catch((err) => console.log("error:", err));

app.get("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use(bodyParse.json({ extended: true }));
app.use(bodyParse.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: "647685c7c2903017cf82ac42", // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});

app.use("/users", userUsers);
app.use("/cards", userCards);

app.listen(PORT, () => {
  console.log("Enlace a server");
});
