/**
 * constantes que importan la librería de mongoose.
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/**
 * Esquema en el cual será guardada la información de los jugadores en la base de datos.
 */
const userSchema = new Schema({
    gamers: [{}],
    inProgress: false,
    winner: {
        type: String,
        trim: true
    },
}, { timestamps: false });

userSchema.plugin(mongooseSoftDelete);

module.exports = User = mongoose.model('User', userSchema);