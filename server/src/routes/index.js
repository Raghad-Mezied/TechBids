const router = require('express').Router();

const {
  serverError,
  clientError,
  handleAddUser,
  handleGetFilteredProducts,
  signIn,
} = require('../controllers');

router.post('/signIn', signIn);
router.post('/signup', handleAddUser);
router.get('/products', handleGetFilteredProducts);
router.use(clientError);
router.use(serverError);

module.exports = router;
