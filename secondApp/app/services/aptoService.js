const Apartamento = require("../models/aptoModels"),
  Unidad = require("../models/unidModels"),
  Propietario = require("../models/propModels"),
  ReqFieldException = require("../exceptions/ReqFieldException");

exports.obtenerApartamento = async () => {
  let apartamento = await Apartamento.find()
    .populate(
      "unidad",
      "nombre numAptos numPisos administrador numCta direccion"
    )
    .populate("propietario", "nombre edad sexo apartamentos");
  return apartamento;
};

exports.crearApartamento = async (apto, unid, prop) => { 
  if(!apto){
    throw new ReqFieldException("Apartamento");
  }
  if(!unid){
    throw new ReqFieldException("Unidad");
  }
  if(!prop){
    throw new ReqFieldException("Propietario");
  }
  let addResult = await Apartamento.create(apto);
  let unidad = await Unidad.findById(unid);
  let propietario = await Propietario.findById(prop);
  unidad.apartamentos.push(addResult);
  unidad.save();
  propietario.apartamentos.push(addResult);
  propietario.save();
  return addResult;
};

exports.elimnarApartamentos = async (idApto) => {
  let deleResult = await Apartamento.findByIdAndDelete(idApto);
  if (!deleResult) {
    return { error: "No esta el apartamento" };
  } else {
    return deleResult;
  }
};

exports.findApartamento = async (idApto) => {
  let findResult = await Apartamento.findById(idApto).populate(
    "unidad",
    "nombre numAptos numPisos administrador"
  );
  if (!findResult) {
    return { error: "No esta el apartamento" };
  } else {
    return findResult;
  }
};

exports.updateApartamento = async (idApto, datos) => {
  let updateResult = await Apartamento.findByIdAndUpdate(idApto, datos, {new: true});
  if (!updateResult) {
    return { error: "No esta el apartamento" };
  } else {
    return updateResult;
  }
};
