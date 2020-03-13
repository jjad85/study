const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const authException = require('../exceptions/NotAuthException');

module.exports = (req, res, next)=>{
    const token = req.headers['authorization'];
    if (!token){
        throw new authException();
    }
    jwt.verify(token, config.SECRET, (err, DecToken)=>{
        if(err){
            throw new authException();
        }
        req.user = DecToken.user;
        next();
    });
};