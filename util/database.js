const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'qwerty12345678*', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
