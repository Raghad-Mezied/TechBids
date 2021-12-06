const router = require('express').Router();

const {

  handleGetFilteredProducts,
  signIn,
  handleAddUser,
  handleAuthUser,
  logout,
  productDetails,
  handleGetTopGategories,
  getAuction,
} = require('../controllers');
const { isAuth } = require('../controllers/middlewares');

router.get('/auth/user', isAuth, handleAuthUser);
router.post('/signIn', signIn);
router.post('/signup', handleAddUser);
router.get('/products', handleGetFilteredProducts);
router.post('/logout', logout);
router.get('/product/:id', productDetails);
router.get('/categories/top', handleGetTopGategories);
router.get('/product/:id/history', getAuction);

module.exports = router;
