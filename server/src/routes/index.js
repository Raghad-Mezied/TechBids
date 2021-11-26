// const router = require('express').Router();
const router = require('express').Router();

const { serverError, clientError } = require('../controllers');

router.use(clientError);
router.use(serverError);

module.exports = router;
