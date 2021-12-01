const router = require('express').Router();

const {
  serverError,
  clientError,
  handleGetFilteredProducts,
  signIn,
  handleAddUser,
  handleAuthUser,
  productDetails,
  getAuction,
} = require('../controllers');
const { isAuth } = require('../controllers/middlewares');

router.get('/auth/user', isAuth, handleAuthUser);
router.post('/signIn', signIn);
router.post('/signup', handleAddUser);
router.get('/products', handleGetFilteredProducts);
router.get('/product/:id', productDetails);
router.get('/product/:id/history', getAuction);

router.use(clientError);
router.use(serverError);

module.exports = router;
