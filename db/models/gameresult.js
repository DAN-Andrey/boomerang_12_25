'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameResult extends Model {
    static associate(models) {
      this.belongsTo(models.Hero, { foreignKey: 'playerId' });
    }
  }
  GameResult.init({
    playerId: DataTypes.INTEGER,
    enemiesDefeated: DataTypes.INTEGER,
    durationSec: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameResult',
  });
  return GameResult;
};