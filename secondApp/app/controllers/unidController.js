 const unidadService = require("../services/unidService");

exports.obtenerUnidad = async (req, res) => {
  try {
    Unidad = await unidadService.obtenerUnidad();
    res.status(200).send(Unidad);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.crearUnidad = async (req, res) => {
  try {
    Unidad = await unidadService.crearUnidad(req.body);
    res.status(200).send(Unidad);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.elimnarUnidades = async (req, res) => {
  try {
    Unidad = await unidadService.elimnarUnidades(req.params.id);
    res.status(200).send(Unidad);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.findUnidad = async (req, res) => {
  try {
    Unidad = await unidadService.findUnidad(req.params.id);
    res.status(200).send(Unidad);
  }catch(err){
    res.status(500).send(err);
  }
};

exports.updateUnidad = async (req, res) => {
  try {
    Unidad = await unidadService.updateUnidad(req.params.id, req.body);
    res.status(200).send(Unidad);
  }catch(err){
    res.status(500).send(err);
  }
};
