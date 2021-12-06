const { serverError, clientError } = require('./error');
const { signUpSchema } = require('./validations');
const { productDetails } = require('./products/index');
const { handleGetTopGategories } = require('./categories');
const {
  handleAddUser,
  signIn,
  handleAuthUser,
  logout,
} = require('./users');
const { handleGetFilteredProducts } = require('./products');
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
  handleGetTopGategories,
  getAuction,
  logout,
};
