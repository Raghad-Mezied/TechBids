const { signTokenPromise } = require('./signInJwt');
const { verifyTokenPromise } = require('./verifyJwt');

module.exports = { signTokenPromise, verifyTokenPromise };
