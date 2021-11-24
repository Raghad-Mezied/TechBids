const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');
const { Product } = require('./product');
const { User } = require('./user');

const Auction = sequelize.define('auction', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  product_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

});
Auction.belongsTo(Product, { foreignkey: 'product_id' });
Auction.belongsTo(User, { foreignkey: 'user_id' });
module.exports = { Auction };
