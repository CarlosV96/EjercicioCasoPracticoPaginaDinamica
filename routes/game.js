/**
 * constantes que traen la librería express
 */
const express = require("express");
const router = express.Router();

/**
 * trae el esquema de la creación del juego ya guardado.
 */
const User = require("../models/createGame");

/**
 * obtiene la información del juego.
 */
router.get("/", function (req, res, next) {
  const data = User.find();
  data
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});

module.exports = router;
