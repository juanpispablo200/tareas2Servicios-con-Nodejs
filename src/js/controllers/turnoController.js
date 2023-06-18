const Turno = require('../models/turnoModel');

// Listar los turnos pendientes
exports.listarTurnosPendientes = async (req, res) => {
  try {
    const turnos = await Turno.find({ estado: 'pendiente' });
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar los turnos pendientes' });
  }
};

// Crear un nuevo turno
exports.crearTurno = async (req, res) => {
  try {
    const { nombreMascota, fecha } = req.body;
    const turno = await Turno.create({ nombreMascota, fecha, estado: 'pendiente' });
    res.json(turno);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el turno' });
  }
};

// Cambiar la fecha de un turno
exports.cambiarFechaTurno = async (req, res) => {
  try {
    const { turnoId } = req.params;
    const { nuevaFecha } = req.body;
    const turno = await Turno.findByIdAndUpdate(turnoId, { fecha: nuevaFecha }, { new: true });
    res.json(turno);
  } catch (error) {
    res.status(500).json({ message: 'Error al cambiar la fecha del turno' });
  }
};

// Eliminar un turno
exports.eliminarTurno = async (req, res) => {
  try {
    const { turnoId } = req.params;
    await Turno.findByIdAndRemove(turnoId);
    res.json({ message: 'Turno eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el turno' });
  }
};
