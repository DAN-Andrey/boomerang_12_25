const Game = require('./src/Game');
const runInteractiveConsole = require('./src/keyboard');

const game = new Game();

const originalAttack = game.hero.attack;
game.hero.attack = function () {
  originalAttack.call(this);
  game.handleAttack();
};

runInteractiveConsole(game.hero);
game.play();
