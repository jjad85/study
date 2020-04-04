const userModel = require('../models/userModels');
const bookModel = require('../models/booksModels');

exports.getUserByUsername = async (username) => {
    return await userModel.findOne({ username: username });
};

exports.createUser = async (user) => {
    return await userModel.create(user);
};

exports.findOneUser = async (idUser) => {
    let user = await userModel.findById(idUser).populate({
        path: 'favoritos',
        model: bookModel,
        select: 'nombre descripcion autor imagen categorias'
    });
    return user;
};
