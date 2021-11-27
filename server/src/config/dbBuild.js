const {
  User,
} = require('../models/index');
const { sequelize } = require('./connection');
const data = require('./data.json');

module.exports = async () => {
  try {
    await sequelize.truncate({ cascade: true });
    await sequelize.sync();
    await Promise.all([
      ...data.users.map((item) => User.create(item)),
    ]);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
