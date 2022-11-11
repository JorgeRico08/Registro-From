const { Router } = require('express');

const path = require('path');
const { unlink } = require('fs-extra');
const router = Router();

// Models
const Alumnos = require('../controllers/alumnoController');

router.get('/registrar', (req, res) => {
    res.render('registrar-alumno');
});
router.get('/', Alumnos.ver_alumnos);
router.post('/registrar', Alumnos.registar_alumnos);
router.get('/registroDocumento/:id', Alumnos.ver_alumno_Id);

module.exports = router;