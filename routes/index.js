/**
 * constantes que traen la librería express
 */
const express = require("express");
const router = express.Router();

/**
 * renderiza las páginas .hbs ya creadas.
 */
router.get("/", function (req, res, next) {
  res.render("index", { tittle: "Dice Game" });
});

router.get("/createGame", function (req, res, next) {
  res.render("createGame", { tittle: "Create Game" });
});

router.get("/startGame", function (req, res, next) {
  res.render("startGame", { tittle: "Start Game" });
});

router.get("/game", function (req, res, next) {
  res.render("game", { tittle: "Query Game" });
});

module.exports = router;
