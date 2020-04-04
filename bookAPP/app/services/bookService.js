const bookModel = require('../models/booksModels');
const userModel = require('../models/userModels');

exports.addBook = async (libro) => {
    let addResult = await bookModel.create(libro);
    return addResult;
};

exports.searchBook = async (param) => {
    let libros = await bookModel.find({
        $or: [
            { nombre: { $regex: '.*' + param + '.*' } },
            { autor: { $regex: '.*' + param + '.*' } },
            { categorias: { $regex: '.*' + param + '.*' } }
        ]
    });
    return libros;
};

exports.findOneBook = async (idBook) => {
    let Libro = await bookModel.findById(idBook);
    return Libro;
};

exports.isFavorite = async (idBook, idUser) => {
    if (idUser) {
        let users = await userModel.findById(idUser);
        let favorito = users.favoritos.find((libro) => libro._id == idBook);
        let blnFavorito = new Boolean(true);
        if (!favorito) {
            blnFavorito = false;
        }
        return blnFavorito;
    }
};

exports.updateBook = async (idBook, book) => {
    let Libro = await bookModel.findByIdAndUpdate(idBook, book, { new: true });
    return Libro;
};

exports.deleteBook = async (idBook) => {
    let Libro = await bookModel.findByIdAndDelete(idBook);
    return Libro;
};

exports.addFavorite = async (idUser, Book) => {
    let user = userModel.updateOne(
        { _id: idUser },
        { $push: { favoritos: Book } }
    );
    return user;
};
