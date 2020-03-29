const contBooks = require("../controllers/bookController");
const middAuth = require("../middlewares/autMiddleware");

module.exports = router => {
    router.route("/libro").post(middAuth, contBooks.addBook);
};