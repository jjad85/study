const Apartamento = require('../models/apartamento');
const Unidad = require('../models/unidades');
const Propietario = require('../models/propietario');

exports.obtenerApartamento = async (req, res) => {
    try{
        let apartamento = await Apartamento.find().populate('unidad', 'nombre numAptos numPisos administrador numCta direccion').populate('propietario', 'nombre edad sexo apartamentos');
        res.status(200).send(apartamento);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.crearApartamento = async (req, res) => {
    try{
        let apartamento = req.body;
        let addResult = await Apartamento.create(apartamento);
        let unidad = await Unidad.findById(req.body.unidad);
        let propietario = await Propietario.findById(req.body.propietario);
        unidad.apartamentos.push(addResult);
        unidad.save();
        propietario.apartamentos.push(addResult);
        propietario.save();
        res.status(200).send(addResult);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.elimnarApartamentos = async (req, res) => {
    try{
        let idApartamento = req.params.id;
        let deleResult = await Apartamento.findByIdAndDelete(idApartamento);
        if(!deleResult){
            res.status(404).send({error: 'No esta el apartamento'});
        }else{
            res.status(200).send(deleResult);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

exports.findApartamento = async (req, res) => {
    try{
        let idApartamento = req.params.id;
        let findResult = await Apartamento.findById(idApartamento).populate('unidad', 'nombre numAptos numPisos administrador');
        if(!findResult){
            res.status(404).send({error: 'No esta el apartamento'});
        }else{
            res.status(200).send(findResult);
        }
    }catch(err){
        res.status(500).send(err);
    };
}

exports.updateApartamento = async (req, res) => {
    let idApartamento = req.params.id;
    let datos = req.body;
    try{        
        let updateResult = await Apartamento.findByIdAndUpdate(idApartamento, datos, {new: true});
        if(!updateResult){
            res.status(404).send({error: 'No esta el apartamento'});
        }else{
            res.status(200).send(updateResult);
        }
    }catch(err){
        res.status(500).send(err);
    }
}
