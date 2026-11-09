const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizzaController");

router.post("/pizzas", pizzaController.cadastrarPizza);

module.exports = router;