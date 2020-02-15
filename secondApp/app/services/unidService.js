const Unidad = require("../models/unidModels");
const Apartamento = require("../models/aptoModels");

exports.obtenerUnidad = async () => {
  let unidad = await Unidad.find().populate({
    path: "apartamentos",
    select: "numero piso",
    populate: {
      path: "propietario",
      select: "nombre edad documento sexo"
    }
  });
  return unidad;
};

exports.crearUnidad = async (unid) => {
  let addResult = await Unidad.create(unid);
  return addResult;
};

exports.elimnarUnidades = async (idUnid) => {
  let deleResult = await Unidad.findByIdAndDelete(idUnid);
  if (!deleResult) {
    return { error: "No esta la unidad" };
  } else {
    return deleResult;
  }
};

exports.findUnidad = async (idUnid) => {
  //let findResult = await Unidad.findById(idUnid);
  let findResult = await Unidad.findById(idUnid).populated('Apartamento', 'numero piso');
  if (!findResult) {
    return { error: "No esta la unidad" };
  } else {
    return findResult;
  }
};

exports.updateUnidad = async (idUnid, datos) => {
  let updateResult = await Unidad.findByIdAndUpdate(idUnid, datos, {new: true});
  if (!updateResult) {
    return { error: "No esta la unidad" };
  } else {
    return updateResult;
  }
};
