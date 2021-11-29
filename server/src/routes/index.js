const router = require('express').Router();

const {
  serverError, clientError, signIn, handleAddUser, productDetails,
} = require('../controllers/index');

router.post('/signIn', signIn);

router.post('/signup', handleAddUser);
router.get('/product/:id', productDetails);
router.use(clientError);
router.use(serverError);

module.exports = router;
