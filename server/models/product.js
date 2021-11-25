const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  winner_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  auc_start_amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  auc_inc_amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  image: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  is_open: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = { Product };
