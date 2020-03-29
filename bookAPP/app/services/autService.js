const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const userService = require('../services/userService');
const userModel = require('../models/userModels');

exports.signUp = async user => {
    const username = user.username;
    const userExist = await userService.getUserByUsername(username);
    if (userExist) {
      throw new Error("Error, Username ya existe");
    }
    return await userService.createUser(user);
};