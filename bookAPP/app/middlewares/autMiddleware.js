const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const authException = require('../exceptions/notAuthException');

module.exports = (req, res, next) => {
    let path = req.route.path;
    let method = req.method;
    const token = req.headers['authorization'];
    if (!token) {
        if (path == '/libro/:id' && method == 'GET') {
            next();
        } else {
            throw new authException();
        }
    } else {
        jwt.verify(token, config.SECRET, (err, DecToken) => {
            if (err) {
                throw new authException();
            }
            req.user = DecToken.user;
            next();
        });
    }
};
