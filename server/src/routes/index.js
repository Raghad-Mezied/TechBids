const router = require('express').Router();
const {
  serverError, clientError, handleAddUser, productDetails,
} = require('../controllers/index');

router.post('/signup', handleAddUser);
router.get('/product/:id', productDetails);
router.use(clientError);
router.use(serverError);

module.exports = router;
