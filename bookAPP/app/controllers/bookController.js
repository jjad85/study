const bookService = require('../services/bookService');

exports.addBook = async (req, res) => {
    Libro = await bookService.addBook(req.body);
    res.status(200).send(Libro);
};

exports.searchBook = async (req, res) => {
    param = req.query.search;
    if (!param) {
        param = '';
    }
    Libros = await bookService.searchBook(param);
    res.status(200).send(Libros);
};
