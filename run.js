const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');
const { createHero } = require('./db/repo/createHero');
const { updateResultsAfterGame } = require('./db/repo/updateResultsAfterGame');

// Сразу запускаем игру
const game = new Game();

runInteractiveConsole(game.hero);
game.play();
