const Sequelize = require('sequelize')

module.exports = sequelize.define('headline', {
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
    }
})