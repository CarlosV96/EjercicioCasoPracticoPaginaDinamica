/**
 * constantes que traen la librería express
 */
const express = require("express");
const router = express.Router();

/**
 * trae el esquema de la creación del juego ya guardado
 * y del comienzo del juego.
 */
const User = require("../models/createGame");
const Game = require("../models/startGame.model");

const num1 = Math.floor(Math.random() * 6) + 1;
const num2 = Math.floor(Math.random() * 6) + 1;
const num3 = Math.floor(Math.random() * 6) + 1;

/**
 * guarda la informacion de los jugadores y su respectiva apuesta
 * en el esquema del inicio del juego.
 */
router.post("/:id", function (req, res, next) {
  const jugadores = User.findById(req.params.id);
  jugadores
    .then((result) => {
      const jug1 = result.gamers[0];
      const jug2 = result.gamers[1];
      const jug3 = result.gamers[2];

      const objeto = new Game({
        id: result.id,
        gamerBet: {
          jugador1: { nombre: jug1, apuesta: num1 },
          jugador2: { nombre: jug2, apuesta: num2 },
          jugador3: { nombre: jug3, apuesta: num3 },
        },
      })
        .save()
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
