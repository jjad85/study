const bookModel = require('../models/booksModels');
const ReqFieldException = require('../exceptions/ReqFieldException');

exports.addBook = async libro => {
    if (!libro.nombre) {
        throw new ReqFieldException('Nombre');
    }
    let addResult = await bookModel.create(libro);
    return addResult;
};

exports.searchBook = async param => {
    if (!param) {
        console.log('No hay parametro');
    } else {
        console.log('Si ahy parametro: ' + param);
    }
    let libros = await bookModel.findOne({});
};
