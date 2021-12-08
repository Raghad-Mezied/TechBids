const { serverError, clientError } = require('./error');
const { signUpSchema } = require('./validations');
const { productDetails, addProduct } = require('./products/index');

const { handleGetTopGategories, handleGetGategories } = require('./categories');
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

  handleGetTopGategories,
  getAuction,
  logout,
  addProduct,
  handleGetGategories,
};
