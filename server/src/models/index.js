const { User } = require('./user');
const { Auction } = require('./auction');
const { Category } = require('./category');
const { Product } = require('./product');

User.belongsToMany(Product, {
  foreignKey: 'user_id', otherKey: 'product_id', through: 'auctions', as: 'auctioned_products',
});
User.hasMany(Product, { foreignKey: 'winner_id', as: 'winner_products' });
User.hasMany(Product, { foreignKey: 'user_id', as: 'user_products' });

Product.belongsTo(User, { foreignKey: 'winner_id', as: 'winner' });
Product.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Product.belongsToMany(User, {
  foreignKey: 'product_id', otherKey: 'user_id', through: 'auctions', as: 'user_auction',
});
Auction.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Category.hasMany(Product, { foreignKey: 'category_id', as: 'products' });

module.exports = {
  User,
  Auction,
  Category,
  Product,
};
