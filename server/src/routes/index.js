const router = require('express').Router();

const { serverError, clientError, signIn } = require('../controllers');

router.post('/signIn', signIn);

router.use(clientError);
router.use(serverError);

module.exports = router;
