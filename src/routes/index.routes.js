const { Router } = require('express');
const router = Router();

const configuracion = require('./configuracion.routes');

router.use('/configuracion', configuracion);

module.exports = router;