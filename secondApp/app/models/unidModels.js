const mongoose = require("mongoose");

let unidadScheme = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  numAptos: {
    type: Number,
    required: true
  },
  numPisos: {
    type: Number,
    required: true
  },
  administrador: {
    type: String,
    required: true
  },
  numCta: {
    type: String,
    required: false
  },
  direccion: {
    type: String,
    required: false
  },
  apartamentos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Apartamento"
    }
  ]
});

mongoose.model("Unidad", unidadScheme);
module.exports = mongoose.model("Unidad");
