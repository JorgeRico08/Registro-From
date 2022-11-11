const { Schema, model } = require('mongoose');

const registroSchema = new Schema({
    nombre: {type: String},
    apePat: {type: String},
    apeMat: {type: String},
    calle: {type: String},
    noExterior: {type: Number},
    colonia: {type: String},
    ciudad: {type: String},
    cP: {type: Number},
    telefonoCasa: {type: Number},
    telefonoPersonal: {type: Number},
    telefonoTutor: {type: Number},
    correo:  {type: String},
    bachilleratoPro: {type: String},
    promedio: {type: Number},
    especialidadCursada:  {type: String},
    nombreMama: {type: String},
    apeMatMama: {type: String},
    apePatMama: {type: String},
    nombrePapa: {type: String},
    apeMatPapa: {type: String},
    apePatPapa: {type: String},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now()}
});

module.exports = model('Registro', registroSchema);