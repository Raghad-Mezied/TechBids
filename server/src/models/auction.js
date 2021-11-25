const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Auction = sequelize.define('auctions', {
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
    defaultValue: Sequelize.NOW,
  },

  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

});

module.exports = { Auction };
