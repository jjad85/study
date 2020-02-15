const Propietario = require("../models/propModels"); 

exports.obtenerpropietarios = async () => {
  let propietarios;
  if (req.query.documento) {
    propietarios = await Propietario.findOne({
      documento: req.query.documento
    }).populate("Apartamento", "numero piso propietario");
  } else {
    propietarios = await Propietario.find().populate(
      "Apartamento",
      "numero piso propietario"
    );
  }
  return propietarios;
};

exports.crearpropietario = async (prop) => {
  let addResult = await Propietario.create(prop);
  return addResult;
};

exports.elimnarpropietarios = async (idProp) => {
  let idPropietario = req.params.id;
  let deleResult = await Propietario.findByIdAndDelete(idProp);
  if (!deleResult) {
    return { error: "No esta el propoietario" };
  } else {
    return deleResult;
  }
};

exports.findpropietario = async (idProp) => {
  let findResult = await Propietario.findById(idProp).populate(
    "Apartamento",
    "numero piso propietario"
  );
  if (!findResult) {
    return { error: "No esta el propoietario" };
  } else {
    return findResult;
  }
};

exports.updatepropietario = async (idProp, datos) => {
  let updateResult = await Propietario.findByIdAndUpdate(idProp, datos, {new: true});
  if (!updateResult) {
    return { error: "No esta el propoietario" };
  } else {
    return updateResult;
  }
};
