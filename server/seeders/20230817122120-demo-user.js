"use strict";

const uuid = require("uuid")

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("t_users", [{
      firstName: "Alain Nambinintsoa",
      lastName: "RAKOTOARIVELO",
      email: "alain@phidia.onmicrosoft.com",
      password: uuid.v4(),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("t_users", null, {})
  }
};
