const { serverError, clientError } = require('./error');
const {
  signIn, handleAddUser, handleAuthUser, logout,
} = require('./users');
const { signUpSchema } = require('./validations');
const { productDetails } = require('./products/index');

module.exports = {
  serverError,
  clientError,
  signUpSchema,
  handleAddUser,
  productDetails,
  signIn,
  handleAuthUser,
  logout,
};
