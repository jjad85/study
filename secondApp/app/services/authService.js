const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const userService = require('../services/userService');
const userModel = require('../models/userModels');

exports.autenticar = async (username, pass) => {
  const user = await userService.getUserByUsername(username)
  if (!user) {
    throw new Error("Usuario no encontrado o no Existe");
  }

  const Result = await user.comparePassword(pass);
  console.log(Result);

  if (!Result) {
    throw new Error("Password Invalido");
  }
  const token = jwt.sign({ user: user._id }, config.SECRET, {
    expiresIn: 10000
  }); //retorno el token por el id del usuario

  return token;
};

exports.signUp = async user => {
  const username = user.userName;
  const userExist = await userService.getUserByUsername(username);

  if (userExist) {
    throw new Error("El usuario ya existe");
  }
  return await userService.createUser(user);
};

exports.validarToken = (token) => {
    const decodedToken = jwt.verify(token, config.SECRET);
    return decodedToken;
};