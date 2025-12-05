const { Hero } = require('../models');

async function findHero(name) {
    await Hero.find({
  where: {name}
});
}

module.exports = { findHero };