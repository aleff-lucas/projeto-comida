const express = require("express");
const pizzaRoutes = require("./routes/pizzas.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(pizzaRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!");
});