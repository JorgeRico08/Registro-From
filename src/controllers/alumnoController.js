const toastr = require('express-toastr');

// Models
const Registro = require('../models/alumnosModel');

exports.ver_alumnos = (async (req, res) => {
    const images = await Registro.find();
    res.render('index', { images });
});


exports.ver_alumno_Id = ( (req, res) => {
    const id  = req.params.id;
    Registro.find({_id:id}, (err, result) => {
        if (err) {
            console.log("A ocurrido un error "+err.message);
        } else {
            console.log(result); }
            res.render('perfil-alumno', { datoRegistro:result });
        });
});

exports.registar_alumnos = (async (req, res) => {
    const image = new Registro();
    image.nombre = req.body.nombre,
    image.apePat = req.body.apePat,
    image.apeMat = req.body.apeMat,
    image.calle =  req.body.calle,
    image.noExterior =  req.body.noExterior,
    image.colonia = req.body.colonia,
    image.ciudad = req.body.ciudad,
    image.cP = req.body.cP,
    image.telefonoCasa = req.body.telefonoCasa,
    image.telefonoPersonal = req.body.telefonoPersonal,
    image.telefonoTutor = req.body.telefonoTutor,
    image.correo = req.body.correo,
    image.bachilleratoPro = req.body.bachilleratoPro,
    image.promedio = req.body.promedio,
    image.especialidadCursada = req.body.especialidadCursada,
    image.nombreMama = req.body.nombreMama,
    image.apeMatMama = req.body.apeMatMama,
    image.apePatMama = req.body.apePatMama,
    image.nombrePapa = req.body.nombrePapa,
    image.apeMatPapa = req.body.apeMatPapa,
    image.apePatPapa = req.body.apePatPapa,
    image.fotoEstudiante = req.files.fotoEstudiante[0].filename,
    image.comprobanteDomicilio = req.files.comprobanteDomicilio[0].filename,
    image.certificado = req.files.certificado[0].filename,

    await image.save((err)=>{
        if (err) {
            console.log("A ocurrido un error",err.message)
        } else {
            res.redirect('/');
        }
    });
});

