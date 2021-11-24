const Sequelize = require('sequelize');
const { Product } = require('.');
const { sequelize } = require('../config/connection');

const Category = sequelize.define('category', {
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
});

Category.hasMany(Product, { foreignkey: 'category_id' });

module.exports = { Category };
