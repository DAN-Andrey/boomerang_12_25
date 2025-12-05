// run.js
const Game = require('./src/Game');
const readline = require('readline');
const { createHero } = require('./db/repo/createHero');
const { updateResultsAfterGame } = require('./db/repo/updateResultsAfterGame');

// Функция для ввода имени через консоль
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Введите имя игрока: ', async (name) => {
  // Создаём объект игрока
  const player = { name, bestScore: 0, totalGames: 1 };

  // Инициализируем игру с этим игроком
  await createHero(player);

  // Сразу запускаем игру
  const game = new Game(player);
  game.play();

  rl.close();

  await updateResultsAfterGame(player);
});
