/**
 * constantes que traen la librería express
 */
const express = require("express");
const router = express.Router();

/**
 * trae el esquema de la creacion del juego
 */
const User = require("../models/createGame");

/**
 * guarda la informacion de los jugadores en el esquema.
 */
router.post("/", function (req, res, next) {
  const createGame = new User({
    type: "",
    gamers: [req.body.jugador1, req.body.jugador2, req.body.jugador3],
    
  });

  createGame
    .save()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

module.exports = router;
