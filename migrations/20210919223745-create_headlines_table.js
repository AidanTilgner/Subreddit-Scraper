'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('headlines', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      headline: {
          type: Sequelize.TEXT,
          allowNull: false,
      },
      karma: {
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
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE
      }
  })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('headlines')
  }
};
