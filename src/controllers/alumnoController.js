const path = require('path');
const { unlink } = require('fs-extra');

// Models
const Image = require('../models/alumnosModel');

exports.ver_alumnos = (async (req, res) => {
    const images = await Image.find();
    res.render('index', { images });
});

exports.registar_alumnos = (async (req, res) => {
    const image = new Image();
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
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    await image.save((err)=>{
        if (err) {
            console.log("A ocurrido un error",err.message)
        } else {
            res.redirect('/');
        }
    });
});

exports.ver_alumno_Id = (async (req, res) =>{
    const { id } = req.params;
    const image = await Image.findById(id);
    res.render('profile', { image });
});


// router.get('/image/:id/delete', async (req, res) => {
//     const { id } = req.params;
//     const imageDeleted = await Image.findByIdAndDelete(id);
//     await unlink(path.resolve('./src/public' + imageDeleted.path));
//     res.redirect('/');
// });