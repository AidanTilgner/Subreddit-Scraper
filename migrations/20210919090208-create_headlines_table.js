'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  Initial creation of the headlines table
    return queryInterface.createTable("headlines", {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
      },
      headline: {
          type: Sequelize.TEXT,
          allowNull: false,
      },
      link: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      upvotes: {
          type: Sequelize.FLOAT,
          allowNull: true
      },
      keywords: {
          type: Sequelize.TEXT,
          allowNull: true,
      },
      tags: {
          type: Sequelize.TEXT,
          allowNull: true,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("headlines")
  }
};
