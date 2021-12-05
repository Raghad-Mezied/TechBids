const router = require('express').Router();

const {
  serverError,
  clientError,
  signIn,
  handleAddUser,
  handleAuthUser,
  logout,
  productDetails,
} = require('../controllers');
const { isAuth } = require('../controllers/middlewares');

router.get('/auth/user', isAuth, handleAuthUser);

router.post('/signIn', signIn);
router.post('/signup', handleAddUser);
router.post('/logout', logout);
router.get('/product/:id', productDetails);
router.use(clientError);
router.use(serverError);

module.exports = router;
