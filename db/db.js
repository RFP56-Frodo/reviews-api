const { Sequelize, Model, DataTypes } = require('sequelize');
const { user, database, password } = require('./config.js');

const seq = new Sequelize(database, user, password, {
  dialect: 'postgres',
  host: '/var/run/postgresql',
  define: {
    timestamps: false
  }
});
 
seq.authenticate().then(() => seq.sync()).catch((error) => console.log(error));

module.exports = seq;
