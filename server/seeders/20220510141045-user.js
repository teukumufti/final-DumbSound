"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        email: "admin@gmail.com",
        password:
          "$2b$10$vjmMwTKS7ExyBRDmOfaCuO9DxzakVAlVxs/eIDFXDmzfbv5EGeo6C", //1234567
        fullname: "Admin",
        status: "admin",
        gender: "male",
        phone: "082299726256",
        address: "Bekasi, jatibening",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
