const { serverError, clientError } = require('./error');
const { signUpSchema } = require('./validations');
const { handleGetTopGategories } = require('./categories');
const {
  handleAddUser,
  signIn,
  handleAuthUser,
  logout,
} = require('./users');
const { handleGetFilteredProducts, productDetails } = require('./products');
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
  handleGetTopGategories,
  getAuction,
  logout,
};
