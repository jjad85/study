const userModel = require('../models/userModels');
const bookModel = require('../models/booksModels');

exports.getUserByUsername = async (username) => {
    let usuario = await userModel.findOne({ username: username });
    return usuario;
};

exports.createUser = async (user) => {
    let usuario = await userModel.create(user);
    return usuario;
};

exports.GetUsers = async () => {
    let usuarios = await userModel.find().populate({
        path: 'favoritos',
        model: bookModel,
        select: 'nombre descripcion autor imagen categorias'
    });
    return usuarios;
};

exports.findOneUser = async (idUser) => {
    let usuario = await userModel.findById(idUser).populate({
        path: 'favoritos',
        model: bookModel,
        select: 'nombre descripcion autor imagen categorias'
    });
    return usuario;
};

exports.UpdateUser = async (idUser, user) => {
    let userOriginal = await userModel.findById(idUser);
    let updUser = await userModel.updateOne(
        { _id: idUser },
        {
            $set: user
        }
    );
    let usuario = await userModel.findById(idUser);
    return usuario;
};

exports.DeleteUser = async (idUser) => {
    let usuario = await userModel.findByIdAndDelete(idUser);
    return usuario;
};
