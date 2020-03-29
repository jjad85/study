const contAuth = require("../controllers/autController");

module.exports = router => {
    router.route("/auth/signup").post(contAuth.singUp);
};