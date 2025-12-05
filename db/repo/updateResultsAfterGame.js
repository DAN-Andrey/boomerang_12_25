const { Hero } = require('../models');
const player = require('../../run');

async function updateResultsAfterGame(score, time) {
  await Hero.update(
    {
      bestScore: 100,
      totalGames: ++player.totalGames,
    },
    {
      where: {
        name: player.name,
      },
    },
  );

  console.log();
}

module.exports = { updateResultsAfterGame };
