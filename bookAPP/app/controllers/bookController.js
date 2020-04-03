const bookService = require('../services/bookService');
const ExceptionGeneral = require('../exceptions/ExceptionGeneral');
const ReqFieldException = require('../exceptions/ReqFieldException');

exports.addBook = async (req, res) => {
    if (!req.body.nombre) {
        throw new ReqFieldException('Nombre');
    }
    Libro = await bookService.addBook(req.body);
    res.status(200).send(Libro);
};

exports.searchBook = async (req, res) => {
    param = req.query.search || '';
    Libros = await bookService.searchBook(param);
    if (Libros == '') {
        throw new ExceptionGeneral('No hay libros con los criterios', 401);
    }
    res.status(200).send(Libros);
};

exports.findOneBook = async (req, res) => {
    let idBook = req.params.id;
    let idUsuario = req.user;
    if (!idBook) {
        throw new ReqFieldException('ID Book');
    }
    let Libro = await bookService.findOneBook(idBook);
    if (!Libro) {
        throw new ExceptionGeneral('Libro no encontrado', 401);
    }
    if (idUsuario) {
        let blnFavorite = await bookService.isFavorite(idBook, idUsuario);
        Libro = Libro.toJSON();
        Libro['isFavorite'] = blnFavorite;
    }
    res.status(200).send(Libro);
};
