const { serverError, clientError } = require('./error');
const { handleAddUser, signIn } = require('./users');
const { handleGetFilteredProducts } = require('./products');

module.exports = {
  serverError,
  clientError,
  handleAddUser,
  signIn,
  handleGetFilteredProducts,
};
