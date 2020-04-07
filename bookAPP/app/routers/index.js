const authentication = require('./autRouters.js'),
    book = require('./bookRouters.js'),
    user = require('./userRouters.js');

module.exports = (router) => {
    authentication(router);
    book(router);
    user(router);
};
