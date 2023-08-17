const Sequelize = require("sequelize")
require("dotenv").config()

const config = require("../config/config")

const sequelize = new Sequelize(
    config.development
)

module.exports = sequelize;