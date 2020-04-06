const authService = require('../services/autService');

exports.singUp = async (req, res) => {
    const user = await authService.signUp(req.body);
    return res.status(201).send(user);
};

exports.singIn = async (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;
    const newToken = await authService.singIn(user, pass);
    const resp = { token: newToken };
    return res.status(201).send(resp);
};
