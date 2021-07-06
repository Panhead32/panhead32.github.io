const Sequelize = require('sequelize')
const sequelize = new Sequelize('mainbase', 'root', '14099041ROr', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize