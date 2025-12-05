const { Hero } = require('../models');

async function createHero(player) {
await Hero.findOrCreate({ where: { name: player.name }, defaults: player })
    .then(([user, created]) => {
      console.log('user', user.get());
      console.log('created', created);
    })
    .catch(console.error);
}

module.exports = { createHero };