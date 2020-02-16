const Propietario = require('../models/propietario');

exports.obtenerpropietarios = async (req, res) => {
    try{
        let propietarios;
        if(req.query.documento){
            propietarios = await Propietario.findOne({documento: req.query.documento}).populate('Apartamento', 'numero piso propietario');;
        }else{
            propietarios = await Propietario.find().populate('Apartamento', 'numero piso propietario');
        }
        res.status(200).send(propietarios);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.crearpropietario = async (req, res) => {
    try{
        let propietario = req.body;
        let addResult = await Propietario.create(propietario);
        res.status(200).send(addResult);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.elimnarpropietarios = async (req, res) => {
    try{
        let idPropietario = req.params.id;
        let deleResult = await Propietario.findByIdAndDelete(idPropietario);
        if(!deleResult){
            res.status(404).send({error: 'No esta el propoietario'});
        }else{
            res.status(200).send(deleResult);
        }
    }catch(err){
        res.status(500).send(err);
    }
}

exports.findpropietario = async (req, res) => {
    try{
        let idPropietario = req.params.id;
        let findResult = await Propietario.findById(idPropietario).populate('Apartamento', 'numero piso propietario');;
        if(!findResult){
            res.status(404).send({error: 'No esta el propoietario'});
        }else{
            res.status(200).send(findResult);
        }
    }catch(err){
        res.status(500).send(err);
    };
}

exports.updatepropietario = async (req, res) => {
    let idPropietario = req.params.id;
    let datos = req.body;
    try{        
        let updateResult = await Propietario.findBy({new: true});
        if(!updateResult){
            res.status(404).send({error: 'No esta el propoietario'});
        }else{
            res.status(200).send(updateResult);
        }
    }catch(err){
        res.status(500).send(err);
    }
}