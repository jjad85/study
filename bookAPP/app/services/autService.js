const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const userService = require('../services/userService');
const userModel = require('../models/userModels');
const ExceptionGeneral = require('../exceptions/ExceptionGeneral');
const ReqFieldException = require('../exceptions/ReqFieldException');

exports.signUp = async user => {
    const username = user.username;
    const userExist = await userService.getUserByUsername(username);
    let User, newUser;
    if (userExist) {
        throw new ExceptionGeneral('El username ya existe', 401);
    }
    newUser = await userService.createUser(user);
    User = await userModel
        .findById(newUser.id)
        .populate('book', 'nombre descripcion autor imagen categorias');
    return User;
};

exports.singIn = async (username, pass) => {
    if (!username) {
        throw new ReqFieldException('Username');
    }
    if (!pass) {
        throw new ReqFieldException('Password');
    }
    const user = await userService.getUserByUsername(username);
    if (!user) {
        throw new ExceptionGeneral('Id de usuario no encontrado', 404);
    }
    const resp = await user.comparePassword(pass);
    if (!resp) {
        throw new ExceptionGeneral('Password incorrecto', 401);
    }
    const token = jwt.sign({ user: user._id }, config.SECRET, {
        expiresIn: 1000
    });
    return token;
};
