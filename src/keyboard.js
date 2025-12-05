const keypress = require('keypress');

// Управление.
function runInteractiveConsole(hero) {
  const keyboard = {
    d: () => hero.moveRight(),
    rigth: () => hero.moveRight(),
    a: () => hero.moveLeft(),
    left: () => hero.moveLeft(),
    w: () => hero.moveUp(),
    up: () => hero.moveUp(),
    s: () => hero.moveDown(),
    down: () => hero.moveDown(),
    space: () => {
      if (!hero.boomerang.active) hero.attack();
    },
  };

  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {
        return keyboard[key.name]();
      }
      // Прерывание программы.
      if ((key.ctrl && key.name === 'c') || key.name === 'q') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

module.exports = runInteractiveConsole;
