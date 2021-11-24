const Sequelize = require("sequelize");
const sequelize = new Sequelize("test","postgres","rawandhosam123");
module.exports = sequelize;