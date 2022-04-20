const express = require('express');//Importa o express!!!---->
const router = express.Router();//Pega o Router da biblioteca express!!!---->

const paletasControllers = require('../controllers/paletasControllers');

//Rota para mostrar todas as paletas!!!---->
router.get('/todas-paletas', paletasControllers.todasPaletasControllers);

//Rota para encontrar uma paleta pelo id!!!--->
router.get('/todas-paletas/:id', paletasControllers.todasPaletasByIdControllers);

//Rota para criar uma paleta!!!---->
router.post('/create', paletasControllers.createPaletaControllers);

//Rota para atualizar paleta!!!---->
router.put('/update/:id', )

//Rota para deletar paleta pelo ID!!!---->
router.delete('/delete/:id', paletasControllers.deletePaletasControllers);

module.exports = router;
