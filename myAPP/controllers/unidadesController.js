const Unidad = require('../models/unidades');
const Apartamento = require('../models/apartamento');

exports.obtenerUnidad = async (req, res) => {
    try{
        let unidad = await Unidad.find().populate(
            { 
                path: "apartamentos",
                select: "numero piso",
                populate: {
                    path: "propietario",
                    select: "nombre edad documento sexo"
                }
            });
        res.status(200).send(unidad);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.crearUnidad = async (req, res) => {
    try{
        let unidad = req.body;
        let addResult = await Unidad.create(unidad);
        res.status(200).send(addResult);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.elimnarUnidades = async (req, res) => {
    try{
        let idUnidad = req.params.id;
        let deleResult = await Unidad.findByIdAndDelete(idUnidad);
        if(!deleResult){
            res.status(404).send({error: 'No esta la unidad'});
        }else{
            res.status(200).send(deleResult);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

exports.findUnidad = async (req, res) => {
    try{
        let idUnidad = req.params.id;
        let findResult = await Unidad.findById(idUnidad);
        //let findResult = await Unidad.findById(idUnidad).populated('Apartamento', 'numero piso');        
        if(!findResult){
            res.status(404).send({error: 'No esta la unidad'});
        }else{
            res.status(200).send(findResult);
        }
    }catch(err){
        res.status(500).send(err);
    };
}

exports.updateUnidad = async (req, res) => {
    let idUnidad = req.params.id;
    let datos = req.body;
    try{        
        let updateResult = await Unidad.findByIdAndUpdate(idUnidad, datos, {new: true});
        if(!updateResult){
            res.status(404).send({error: 'No esta la unidad'});
        }else{
            res.status(200).send(updateResult);
        }
    }catch(err){
        res.status(500).send(err);
    }
}