const controller = require("../controllers/unidController");

module.exports = router => {
  router.route("/unidades").get(controller.obtenerUnidad);
  router.route("/unidades").post(controller.crearUnidad);
  router.route("/unidades/:id").delete(controller.elimnarUnidades);
  router.route("/unidades/:id").get(controller.findUnidad);
  router.route("/unidades/:id").put(controller.updateUnidad);
};