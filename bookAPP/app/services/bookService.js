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
    let libros = await bookModel.find({
        $or: [
            { nombre: { $regex: '.*' + param + '.*' } },
            { autor: { $regex: '.*' + param + '.*' } },
            { categorias: { $regex: '.*' + param + '.*' } }
        ]
    });
    return libros;
};
