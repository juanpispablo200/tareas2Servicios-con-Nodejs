const express = require('express');
const turnoController = require('../controllers/turnoController');

const router = express.Router();

router.get('/turnos', turnoController.listarTurnosPendientes);
router.post('/turnos', turnoController.crearTurno);
router.put('/turnos/:turnoId/fecha', turnoController.cambiarFechaTurno);
router.delete('/turnos/:turnoId', turnoController.eliminarTurno);

module.exports = router;
