const router = require('express').Router();

const {
  serverError, clientError, signIn, handleAddUser, getAuction,
} = require('../controllers');

router.post('/signIn', signIn);
router.get('/product/:id/history', getAuction);
router.post('/signup', handleAddUser);
router.use(clientError);
router.use(serverError);

module.exports = router;
