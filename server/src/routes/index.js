const router = require('express').Router();

const { serverError, clientError, signIn } = require('../controllers');

router.get('/signIn', signIn);

router.use(clientError);
router.use(serverError);

module.exports = router;
