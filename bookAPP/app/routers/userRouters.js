const contUser = require('../controllers/userController');
const middAuth = require('../middlewares/autMiddleware');

module.exports = (router) => {
    router.route('/user').get(middAuth, contUser.GetUsers);
    router.route('/user/:id').get(middAuth, contUser.findOneUser);
    router.route('/user/:id').patch(middAuth, contUser.UpdateUser);
    router.route('/user/:id').delete(middAuth, contUser.DeleteUser);
};
