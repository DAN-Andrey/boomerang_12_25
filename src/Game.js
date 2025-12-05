// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
// const runInteractiveConsole = require('./keyboard');
const COLUMN = 30;
const ROW = 10;

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor() {
    this.hero = new Hero(1, 1); // Герою можно аргументом передать бумеранг.
    // this.enemy = new Enemy();
    this.view = new View();
    this.field = [[]];
    this.regenerateField();
  }

  regenerateField() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных (двумерный массив в виде поля)

    // this.field = new Array(ROW).fill(new Array(COLUMN).fill(' '));
    for (let i = 0; i < ROW; i++) {
      this.field[i] = new Array(COLUMN).fill(' ');
    }
    this.field[this.hero.position_row][this.hero.position_column] = this.hero.skin;
    // добавление врага
    // добавление бумеранга
  }

  // check() {
  //   if (this.hero.position === this.enemy.position) {
  //     this.hero.die();
  //   }
  // }

  play() {
    setInterval(() => {
      // Let's play!
      // this.check();
      this.regenerateField();
      View.drawField(this.field);
    }, 1000);
  }
}

module.exports = Game;
