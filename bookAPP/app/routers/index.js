const authentication = require("./autRouters");

module.exports = router => {
    authentication(router);
};