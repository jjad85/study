const mongoose = require('mongoose');

let apartamentoScheme = new mongoose.Schema({
    numero: {
        type: String,
        required: true
    },
    piso: {
        type: Number,
        required: true
    },
    unidad:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Unidad'
    },
    propietario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Propietario'
    }
});

mongoose.model('Apartamento', apartamentoScheme);
module.exports = mongoose.model('Apartamento');