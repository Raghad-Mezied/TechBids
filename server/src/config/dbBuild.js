const {
  User,
} = require('../models/index');
const { sequelize } = require('./connection');
const data = require('./data.json');

module.exports = async () => {
  try {
    await sequelize.sync({ force: true });
    await Promise.all([
      ...data.users.map((item) => User.create(item)),
    ]);
  } catch (err) {
    console.log(err);
  }
//   console.log(process.exit())
//   return process.exit(0);
};
