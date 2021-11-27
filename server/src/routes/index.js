const router = require('express').Router();
const { serverError, clientError, handleAddUser } = require('../controllers');

router.post('/signup', handleAddUser);
router.use(clientError);
router.use(serverError);

module.exports = router;
