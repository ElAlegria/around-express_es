const express = require("express");
const { PORT = 3000 } = process.env;
const app = express();
const userCards = require("./routes/cards");
const userUsers = require("./routes/users");
app.get("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use("/users", userUsers);
app.use("/cards", userCards);

app.listen(PORT, () => {
  console.log("Enlace a server");
  // console.log(BASE_PATH);
});

//!Proximo uso(not delate)
// const path = require("path");
// app.use(express.static(path.join(__dirname, "public")));
