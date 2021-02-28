const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MascotaSchema = new Schema({
    nombre:String,
    descripcion:String
})

//Crear modelo

const Mascota = mongoose.model('Mascota',MascotaSchema);

module.exports = Mascota;