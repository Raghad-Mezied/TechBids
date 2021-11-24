const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres:/bid:rawandhosam123@localhost:5432/techBid')
module.exports = sequelize;