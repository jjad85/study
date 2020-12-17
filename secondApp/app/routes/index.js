const authentication = require("./authRouters"),
  apartamento = require("./aptoRouters"),
  unidad = require("./unidRouters"),
  propietario = require("./propRouters");

module.exports = router => {
  authentication(router);
  apartamento(router);
  unidad(router);
  propietario(router);
};
