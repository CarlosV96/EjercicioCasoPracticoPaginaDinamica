/**
 * constantes que importan la librería de mongoose.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/**
 * Esquema en el cual será guardada la información del juego en la base de datos.
 */
const gamerSchema = new Schema({
    id: '',
    gamerBet: {
        jugador1: {'nombre': String, 'apuesta' : Number},
        jugador2: {'nombre': String, 'apuesta' : Number},
        jugador3: {'nombre': String, 'apuesta' : Number}
    }
}, { timestamps: false });

gamerSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', gamerSchema);