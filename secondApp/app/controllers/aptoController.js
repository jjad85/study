const aptoService = require("../services/aptoService");

exports.obtenerApartamento = async (res) => {
  try {
    Apartamento = await aptoService.obtenerApartamento();
    res.status(200).send(Apartamento);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.crearApartamento = async (req, res) => {
  try {
    Apartamento = await aptoService.crearApartamento(req.body, req.body.unidad, req.body.propietario);
    res.status(200).send(Apartamento);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.elimnarApartamentos = async (req, res) => {
  try {
    Apartamento = await aptoService.elimnarApartamentos(req.params.id);
    res.status(200).send(Apartamento);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.findApartamento = async (req, res) => {
  try {
    Apartamento = await aptoService.findApartamento(req.params.id);
    res.status(200).send(Apartamento);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.updateApartamento = async (req, res) => {
  try {
    Apartamento = await aptoService.updateApartamento(req.params.id, req.body);
    res.status(200).send(Apartamento);
  }catch(err){
    res.status(500).send(err);
  }
};