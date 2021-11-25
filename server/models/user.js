const Sequelize = require('sequelize');
const { Product } = require('.');
const { sequelize } = require('../config/connection');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.belongsToMany(Product, { through: 'action', as: 'auctioned_products' });

User.hasMany(Product, { foreignkey: 'winner_id', as: 'winner_products' });
User.hasMany(Product, { foreignkey: 'user_id', as: 'user_products' });

module.exports = { User };
