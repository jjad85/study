const controller = require("../controllers/aptoController.js");
const middApto = require("../middlewares/authMiddleware");

module.exports = router => {
  router.route("/apartamentos").get(middApto, controller.obtenerApartamento);
  router.route("/apartamentos").post(controller.crearApartamento);
  router.route("/apartamentos/:id").delete(controller.elimnarApartamentos);
  router.route("/apartamentos/:id").get(controller.findApartamento);
  router.route("/apartamentos/:id").put(controller.updateApartamento);
};