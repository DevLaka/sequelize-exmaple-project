// Importing Sequelize
const { Sequelize } = require("sequelize");

// Connecting to DB
module.exports = new Sequelize("progamming_gigs", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

