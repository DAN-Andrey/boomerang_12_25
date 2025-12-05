// run.js
const Game = require('./src/Game');
const readline = require('readline');
const { Hero, GameResult } = require('./db/models');

// Функция для ввода имени через консоль
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Введите имя игрока: ', (name) => {
  // Создаём объект игрока
  const player = { name, score: 0, level: 1 };

  // Инициализируем игру с этим игроком
  Hero.findOrCreate({ where: { name: player.name }, defaults: player })
    .then(([user, created]) => {
      console.log('user', user.get());
      console.log('created', created);
    })
    .catch(console.error);

  // Сразу запускаем игру
  const game = new Game(player);
  game.play();

  rl.close();
});
