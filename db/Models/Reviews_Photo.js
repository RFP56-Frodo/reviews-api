const { Sequelize, Model, DataTypes } = require('sequelize');
const seq = require('../db.js');

class Reviews_Photo extends Model {}

Reviews_Photo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  review_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

}, {
  sequelize: seq
});

module.exports = Reviews_Photo;