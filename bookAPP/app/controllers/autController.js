const authService = require("../services/autService");

exports.singUp = async (req, res) => {
  try {
    const user = await authService.signUp(req.body);
    if (!user) {
      return res.status(401).send({error: 'Error, Username ya existe'});
    }
    return res.status(201).send(user);
  } catch (err) {
    res.status(401).send({status: 401, message: err.message});
  }
}; 

exports.singIn = async (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;
  try{
    const newToken = await authService.singIn(user, pass);
    const resp = { token: newToken };
    return res.status(201).send(resp);
  } catch (err){
    return res.status(401).send({status: 401, message: err.message});
  }
};