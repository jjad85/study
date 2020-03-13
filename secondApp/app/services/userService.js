const userModel = require('../models/userModels');

exports.getUserByUsername = async (username) => {
    return await userModel.findOne ({username: username}); //retorna un usuario cuando se envía un usuario
};

exports.createUser  = async(user) => {
    return await userModel.create(user);
};