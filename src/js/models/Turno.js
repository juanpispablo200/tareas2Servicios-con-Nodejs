const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
  nombreMascota: String,
  fecha: Date,
  estado: String,
});

module.exports = mongoose.model('Turno', turnoSchema);
