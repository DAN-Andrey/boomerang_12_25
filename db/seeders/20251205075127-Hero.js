'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Heros', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    
  },

  async down (queryInterface) {
  await queryInterface.bulkDelete('People', null, {});
  }
};
