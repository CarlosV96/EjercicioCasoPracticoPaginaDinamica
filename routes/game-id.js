/**
 * constantes que traen librerías de UUID y express.
 */
const { v4: uuidv4 } = require('uuid');
const express = require("express");
const router = express.Router();

/**
 * trae el esquema de la creación del juego ya guardado.
 * y anexa un número de identificación
 */
const User = require("../models/createGame");
const jugador1 = uuidv4();
const jugador2 = uuidv4();
const jugador3 = uuidv4();

/**
 * obtiene la información por id de juego, ya guardada de cada jugador
 */
router.get("/:id", function (req, res, next) {
  const data = User.findById(req.params.id);

  data
    .then((result) => {
      //console.log(result);
      const objeto = {
        "gamers" : {
          jugador1 : {
            "id" : jugador1,
            "name" : result.gamers[0]
          },
          jugador2 : {
            "id" : jugador2,
            "name" : result.gamers[1]
          },
          jugador3 : {
            "id" : jugador3,
            "name" : result.gamers[2]
          },
        },
        "inProgress" : true,
        "winner" : '',
      }
      res.json(objeto);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
