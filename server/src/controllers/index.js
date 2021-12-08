const { serverError, clientError } = require('./error');
const { signUpSchema } = require('./validations');
const { handleGetTopGategories, handleGetGategories } = require('./categories');
const {
  handleAddUser,
  signIn,
  handleAuthUser,
  logout,
} = require('./users');
const { handleGetFilteredProducts, productDetails, getUserWinBids } = require('./products');
const { getAuction, latestAuction } = require('./auctions');

module.exports = {
  serverError,
  clientError,
  signUpSchema,
  signIn,
  handleAddUser,
  productDetails,
  handleGetFilteredProducts,
  handleAuthUser,
  handleGetTopGategories,
  getAuction,
  logout,
  handleGetGategories,
  latestAuction,
  getUserWinBids,
};
