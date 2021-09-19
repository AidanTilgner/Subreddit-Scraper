const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize()

//  To sync the table changes when they need to be synced
const { syncHeadlines } = require('../functions/syncTables') 

const headline = sequelize.define('headline', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    headline: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    upvotes: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    keywords: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    tags: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
})