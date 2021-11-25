const router = require('express').Router();
const { handleAddUser } = require('../controllers/users');

router.post('/signup', handleAddUser);

module.exports = router;
