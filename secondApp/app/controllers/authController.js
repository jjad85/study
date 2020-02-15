const authService = require("../services/authService");

exports.login = async (req, res) => {
  const user = req.body.user,
    pass = req.body.pass,
    token = authService.autenticar(user, pass);
  const response = {token: token};
  res.send(response);
};

exports.autenticar = async(req, res) => {
  const token = req.body.token;
  try {
    const decodedToken = authService.validarToken(token);
    res.status(200).send(decodedToken);
  }catch(err){
    res.status(500).send(err);
  }
};