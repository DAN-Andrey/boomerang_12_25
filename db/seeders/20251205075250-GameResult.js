'use strict';

/** @type {import('sequelize-cli').Migration} */
const arrOfResults = [];

for (let index = 0; index < 10; index++) {
  arrOfResults.push({
    playerId: Math.floor(Math.random() * 10) + 1,
    enemiesDefeated: Math.floor(Math.random() * 10) + 1,
    durationSec: Math.floor(Math.random() * 10) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('GameResults', arrOfResults, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('GameResults', null, {});
  },
};
