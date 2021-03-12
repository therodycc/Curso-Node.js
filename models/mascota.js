const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MascotaSchema = new Schema({
    Nombre:String,
    Descripcion:String
})

//Crear modelo

const MascotaModel = mongoose.model('Perros',MascotaSchema);

module.exports = MascotaModel;