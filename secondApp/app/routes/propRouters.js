const controller = require("../controllers/propController");

module.exports = router => {
  router.route("/propietarios").get(controller.obtenerpropietarios);
  router.route("/propietarios").post(controller.crearpropietario);
  router.route("/propietarios/:id").delete(controller.elimnarpropietarios);
  router.route("/propietarios/:id").get(controller.findpropietario);
  router.route("/propietarios/:id").put(controller.updatepropietario);
};