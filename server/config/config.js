require('dotenv').config()

const development = {
    database: process.env.PG_DATABASE,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    dialect: process.env.DIALECT
}

const test = {
    database: process.env.PG_DATABASE,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    dialect: process.env.DIALECT
}

const production = {
    database: process.env.PG_DATABASE,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    dialect: process.env.DIALECT
}

module.exports = {
    development,
    test,
    production
}