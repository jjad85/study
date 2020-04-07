const userService = require('../services/userService');
const ExceptionGeneral = require('../exceptions/ExceptionGeneral');
const ReqFieldException = require('../exceptions/ReqFieldException');

exports.GetUsers = async (req, res) => {
    let usuarios = await userService.GetUsers();
    if (!usuarios) {
        throw new ExceptionGeneral('No hay usuarios', 401);
    }
    res.status(200).send(usuarios);
};

exports.findOneUser = async (req, res) => {
    let idUser = req.params.id;
    console.log('ID Ingreso: ' + idUser);
    if (!idUser) {
        throw new ReqFieldException('ID Book');
    }
    let usuario = await userService.findOneUser(idUser);
    if (!usuario) {
        throw new ExceptionGeneral('Usuario no encontrado', 401);
    }
    res.status(200).send(usuario);
};

exports.UpdateUser = async (req, res) => {
    let idUser = req.params.id;
    if (!idUser) {
        throw new ReqFieldException('ID Book');
    }
    if (!req.body) {
        throw new ExceptionGeneral('Debe enviar datos a modificar', 401);
    }
    let usuario = await userService.UpdateUser(idUser, req.body);
    if (!usuario) {
        throw new ExceptionGeneral('Usuario no encontrado', 401);
    }
    res.status(200).send(usuario);
};

exports.DeleteUser = async (req, res) => {
    let idUser = req.params.id;
    if (!idUser) {
        throw new ReqFieldException('ID Book');
    }
    let usuario = await userService.DeleteUser(idUser);
    if (!usuario) {
        throw new ExceptionGeneral('Usuario no encontrado', 401);
    }
    res.status(200).send(usuario);
};
