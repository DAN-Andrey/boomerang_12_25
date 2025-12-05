// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');
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

    for (let i = 0; i < ROW; i++) {
      this.field[i] = new Array(COLUMN).fill(' ');
    }
    if (this.hero.boomerang)
      this.field[this.hero.boomerang.position_row][this.hero.boomerang.position_column] =
        this.hero.boomerang.skin;
    this.field[this.hero.position_row][this.hero.position_column] = this.hero.skin;
    // добавление врага
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
      if (this.hero.boomerang.active === true) this.hero.boomerang.fly();
      this.regenerateField();
      View.drawField(this.field);
    }, 200);
  }
}

module.exports = Game;
