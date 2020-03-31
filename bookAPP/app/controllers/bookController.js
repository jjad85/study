const bookService = require('../services/bookService');
const ExceptionGeneral = require('../exceptions/ExceptionGeneral');

exports.addBook = async (req, res) => {
    Libro = await bookService.addBook(req.body);
    res.status(200).send(Libro);
};

exports.searchBook = async (req, res) => {
    param = req.query.search || '';
    Libros = await bookService.searchBook(param);
    console.log('Respuesta: ' + Libros);
    if (Libros == '') {
        throw new ExceptionGeneral('No hay libros con los criterios', 401);
    }
    res.status(200).send(Libros);
};
