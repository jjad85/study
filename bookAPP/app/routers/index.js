const authentication = require("./autRouters.js"),
    book = require("./bookRouters.js");

module.exports = router => {
    authentication(router);
    book(router);
};


