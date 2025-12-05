const { Hero } = require('../models');

async function updateResultsAfterGame(player) {
  await Hero.update(
    {
      bestScore: player.bestScore,
      totalGames: player.totalGames,
    },
    {
      where: {
        name: player.name,
      },
    },
  );
}

module.exports = { updateResultsAfterGame };
