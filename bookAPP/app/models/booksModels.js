const mongoose = require('mongoose');

let bookScheme = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    autor: { type: String },
    imagen: { type: String },
    categorias: [{ type: String }]
});

mongoose.model('book', bookScheme);
module.exports = mongoose.model('book');
