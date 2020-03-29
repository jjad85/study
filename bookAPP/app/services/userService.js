const userModel = require('../models/userModels');

exports.getUserByUsername = async (username) => {    
    return await userModel.findOne ({username: username});
};

exports.createUser  = async(user) => {
    return await userModel.create(user);
};