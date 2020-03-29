const mongoose = require("mongoose");

let bookScheme = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    autor: { type: String, required: true },
    imagen: { type: String, require: false },
    categorias: [ {type: String} ]
});


mongoose.model("Book", bookScheme);
module.exports = mongoose.model("Book");
