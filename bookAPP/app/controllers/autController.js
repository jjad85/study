const authService = require("../services/autService");

exports.singUp = async (req, res) => {
    try {
      const user = await authService.signUp(req.body);
      if (!user) {
        return res.status(401).send({error: 'Error, Username ya existe'});
      }
      return res.status(201).send(user);
    } catch (err) {
      res.status(401).send({error: err.message});
    }
};  