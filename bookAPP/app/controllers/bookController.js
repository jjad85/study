const bookService = require('../services/bookService');
const userService = require('../services/userService');
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

exports.updateBook = async (req, res) => {
    let idBook = req.params.id;
    if (!idBook) {
        throw new ReqFieldException('ID Book');
    }
    if (!req.body) {
        throw new ExceptionGeneral('Debe enviar datos a modificar', 401);
    }
    let Libro = await bookService.updateBook(idBook, req.body);
    if (!Libro) {
        throw new ExceptionGeneral('Libro no encontrado', 401);
    }
    res.status(200).send(Libro);
};

exports.deleteBook = async (req, res) => {
    let idBook = req.params.id;
    if (!idBook) {
        throw new ReqFieldException('ID Book');
    }
    let Libro = await bookService.deleteBook(idBook);
    if (!Libro) {
        throw new ExceptionGeneral('Libro no encontrado', 401);
    }
    res.status(200).send(Libro);
};

exports.addFavorite = async (req, res) => {
    let idBook = req.params.id;
    let idUser = req.user;
    if (!idBook) {
        throw new ReqFieldException('ID Book');
    }
    let Libro = await bookService.findOneBook(idBook);
    if (!Libro) {
        throw new ExceptionGeneral('Libro no encontrado', 401);
    }
    let blnFavorite = await bookService.isFavorite(idBook, idUser);
    if (blnFavorite) {
        throw new ExceptionGeneral('Libro ya es favorito del usuario', 401);
    }
    await bookService.addFavorite(idUser, Libro);
    let usuario = await userService.findOneUser(idUser);
    res.status(200).send(usuario);
};

exports.rmFavorite = async (req, res) => {
    let idBook = req.params.id;
    let idUser = req.user;
    if (!idBook) {
        throw new ReqFieldException('ID Book');
    }
    let Libro = await bookService.findOneBook(idBook);
    if (!Libro) {
        throw new ExceptionGeneral('Libro no encontrado', 401);
    }
    let blnFavorite = await bookService.isFavorite(idBook, idUser);
    if (!blnFavorite) {
        throw new ExceptionGeneral('Libro no es favorito del usuario', 401);
    }
    let usuario = await bookService.rmFavorite(idUser, Libro);
    res.status(200).send(usuario);
};
