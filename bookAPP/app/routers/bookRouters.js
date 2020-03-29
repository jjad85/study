const contBooks = require("../controllers/bookController");

module.exports = router => {
    router.route("/libro").post(contBooks.addBook);
};