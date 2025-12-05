// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

function runInteractiveConsole(hero) {
  const keyboard = {
    d: () => hero.moveRight(),
    w: () => hero.moveUp(),
    s: () => hero.moveDown(),
    a: () => hero.moveLeft(),
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
