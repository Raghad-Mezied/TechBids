const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');
const { User } = require('./user');
const { Category } = require('./category');

const Product = sequelize.define('product', {
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
Product.belongsTo(User, { foreignkey: 'winner_id', as: 'winner' });
Product.belongsTo(User, { foreignkey: 'user_id', as: 'user' });
Product.belongsTo(Category, { foreignkey: 'category_id', as: 'category' });

Product.belongsToMany(User, { through: 'auction', as: 'user_auction' });

module.exports = { Product };
