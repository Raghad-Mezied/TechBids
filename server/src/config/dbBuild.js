const {
  User,
  Product,
  Category,
  Auction,
} = require('../models/index');
const { sequelize } = require('./connection');
const data = require('./data.json');

const build = async () => {
  try {
    // await sequelize.truncate();
    await sequelize.sync({ force: true });
    await Promise.all([
      ...data.users.map((item) => User.create(item)),
      ...data.categories.map((item) => Category.create(item)),
      ...data.products.map((item) => Product.create(item)),
      ...data.auctions.map((item) => Auction.create(item)),
    ]);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

build();

module.exports = { build };
