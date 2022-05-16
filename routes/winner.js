/**
 * constantes que importan la librería express
 */
const express = require("express");
const router = express.Router();
const createError = require("http-errors");

/**
 * importa el esquema del inicio del juego.
 */
const Game = require("../models/startGame.model");

/**
 * obtiene cada jugador con su apuesta y presenta al ganador
 */
router.get("/:id/winner", function (req, res, next) {
  const data = Game.findOne({ id: req.params.id });

  data
    .then((result) => {
      const apuestaJug1 = result.gamerBet.jugador1.apuesta;
      const apuestaJug2 = result.gamerBet.jugador2.apuesta;
      const apuestaJug3 = result.gamerBet.jugador3.apuesta;

      const nombre1 = result.gamerBet.jugador1.nombre;
      const nombre2 = result.gamerBet.jugador2.nombre;
      const nombre3 = result.gamerBet.jugador3.nombre;

      const highest = Math.max(apuestaJug2, apuestaJug3, apuestaJug1);

      if (result) {
        if (highest == apuestaJug1) {
          res.json("Ganador:" + " " + nombre1 + ": " + apuestaJug1);
        }
        if (highest == apuestaJug2) {
          res.json("Ganador:" + " " + nombre2 + ": " + apuestaJug2);
        }
        if (highest == apuestaJug3) {
          res.json("Ganador:" + " " + nombre3 + ": " + apuestaJug3);
        }
      } else {
        next(createError(404, "Juego no encontrado"));
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
