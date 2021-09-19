const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize()



//  we need to make sure the table is synced and that when we alter the model the 
//  table is altered with it
const syncHeadlines = async () => {
    try{
        await headline.sync({ alter: true })
        console.log('Headlines table synced')
    }
    catch{
        console.log('There was an error syncing headlines table')
    }
}

module.exports = {
    syncHeadlines,
}