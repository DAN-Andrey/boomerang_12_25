'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
const arrOfHeros = [];

for (let index = 0; index < 10; index++) {
  arrOfHeros.push({
    name: faker.internet.username(),
    bestScore: Math.floor(Math.random() * 10) + 1,
    totalGames: Math.floor(Math.random() * 10) + 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Heros', arrOfHeros, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Heros', null, {});
  },
};
