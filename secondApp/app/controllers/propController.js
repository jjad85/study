const propService = require("../services/propService");

exports.obtenerpropietarios = async (res) => {
  try {
    Propietario = await propService.obtenerpropietarios();
    res.status(200).send(Propietario);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.crearpropietario = async (req, res) => {
  try {
    Propietario = await aptoService.crearpropietario(req.body);
    res.status(200).send(Propietario);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.elimnarpropietarios = async (req, res) => {
  try {
    Propietario = await aptoService.elimnarpropietarios(req.params.id);
    res.status(200).send(Propietario);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.findpropietario = async (req, res) => {
  try {
    Propietario = await aptoService.findpropietario(req.params.id);
    res.status(200).send(Propietario);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.updatepropietario = async (req, res) => {
  try {
    Propietario = await aptoService.updatepropietario(req.params.id, req.body);
    res.status(200).send(Propietario);
  }catch(err){
    res.status(500).send(err);
  }
};
