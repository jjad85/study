const contAuth = require("../controllers/autController");
const middAuth = require("../middlewares/autMiddleware")

module.exports = router => {
    router.route("/auth/signup").post(contAuth.singUp);
    router.route("/auth/signin").post(contAuth.singIn);
};