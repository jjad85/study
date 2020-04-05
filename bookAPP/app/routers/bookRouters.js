const contBooks = require('../controllers/bookController');
const middAuth = require('../middlewares/autMiddleware');

module.exports = (router) => {
    router.route('/libro').post(middAuth, contBooks.addBook);
    router.route('/libro/').get(contBooks.searchBook);
    router.route('/libro/:id').get(middAuth, contBooks.findOneBook);
    router.route('/libro/:id').patch(middAuth, contBooks.updateBook);
    router.route('/libro/:id').delete(middAuth, contBooks.deleteBook);
    router
        .route('/libro/addfavorite/:id')
        .post(middAuth, contBooks.addFavorite);
    router.route('/libro/rmfavorite/:id').post(middAuth, contBooks.rmFavorite);
};
