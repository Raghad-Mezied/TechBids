const { serverError, clientError } = require('./error');
const {
  handleAddUser,
  signIn,
  handleAuthUser,
  logout,
} = require('./users');
const { handleGetFilteredProducts, productDetails } = require('./products');
const { signUpSchema } = require('./validations');
const { getAuction } = require('./auctions');

module.exports = {
  serverError,
  clientError,
  handleAddUser,
  productDetails,
  signIn,
  handleGetFilteredProducts,
  signUpSchema,
  handleAuthUser,
  getAuction,
  logout,
};
