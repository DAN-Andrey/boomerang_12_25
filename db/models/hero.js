'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate(models) {
      this.hasMany(models.GameResult, { foreignKey: 'playerId' });
    }
  }
  Hero.init({
    name: DataTypes.STRING,
    bestScore: DataTypes.INTEGER,
    totalGames: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hero',
  });
  return Hero;
};