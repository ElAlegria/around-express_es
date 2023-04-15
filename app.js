const express = require("express");
const { PORT = 3000 } = process.env;
const app = express();
const path = require("path");
const userCards = require("./routes/cards");
const userUsers = require("./routes/users");

app.get("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});
app.use(express.static(path.join(__dirname, "public")));
app.use("/users", userUsers);
app.use("/cards", userCards);

// app.get("/users/:id", (req, res) => {
//   res.send(req.query);
// });

app.listen(PORT, () => {
  console.log("Enlace a server");
  // console.log(BASE_PATH);
});
