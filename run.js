const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');
const { createHero } = require('./db/repo/createHero');
const player = { name: process.argv[2], bestScore: 0, totalGames: 1 };

if (process.argv.length === 3) {
  // Инициализируем игру с этим игроком
  createHero(player);

  // Сразу запускаем игру
  const game = new Game();

  runInteractiveConsole(game.hero);
  game.play();
} else {
  console.log('Введите имя пользователя....');
}

module.exports = player;
