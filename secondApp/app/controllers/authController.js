const authService = require("../services/authService");

exports.login = async (req, res) => {
  const user = req.body.user,
    pass = req.body.pass;
  
  try {
    const token = await authService.autenticar(user, pass);
    const response = { token: token };
    res.send(response);
  } catch (err) {
    res.status(401).send({ error: err.message });
  }
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

exports.singUp = async (req, res) => {
  try {
    const user = await authService.signUp(req.body);
    if (!user) {
      return res.status(500).send({error: 'El usuario no ha podido ser creado'});
    }
    return res.status(201).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send({error: err.message});
  }
};  