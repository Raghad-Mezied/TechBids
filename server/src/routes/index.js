const router = require('express').Router();

const {
  serverError, clientError, signIn, handleAddUser,
} = require('../controllers');

router.post('/signIn', signIn);

router.post('/signup', handleAddUser);
router.use(clientError);
router.use(serverError);

module.exports = router;
