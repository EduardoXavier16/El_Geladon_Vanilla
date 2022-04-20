const express = require('express');
const router = express.Router();

const paletasControllers = require('../controllers/paletasControllers');

router.get('/todas-paletas', paletasControllers.todasPaletasControllers);
router.get('/todas-paletas/:id', paletasControllers.todasPaletasByIdControllers);

module.exports = router;
