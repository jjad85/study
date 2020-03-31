const jwt = require("jsonwebtoken");
const config = require("../configs/config");
const userService = require("../services/userService");
const userModel = require("../models/userModels");
const UserException = require("../exceptions/UserException");

exports.signUp = async user => {
	const username = user.username;
	const userExist = await userService.getUserByUsername(username);
	if (userExist) {
		throw new UserException("El username ya existe");
	}
	return await userService.createUser(user);
};

exports.singIn = async (username, pass) => {
	const user = await userService.getUserByUsername(username);
	if (!user) {
		throw new UserException("Id de usuario no encontrado");
	}
	const resp = await user.comparePassword(pass);
	if (!resp) {
		throw new UserException("Password incorrecto");
	}
	const token = jwt.sign({ user: user._id }, config.SECRET, {
		expiresIn: 1000
	});
	return token;
};
