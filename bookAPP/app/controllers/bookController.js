const bookService = require("../services/bookService");

exports.addBook = async (req, res) => {
    Libro = await bookService.addBook(req.body);
    res.status(200).send(Libro);
};