const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');
const COLUMN = 30;
const ROW = 10;

// Основной класс игры.
class Game {
  constructor() {
    this.hero = new Hero(1, 1);
    this.enemy = new Enemy();
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
    if (this.hero.boomerang.active)
      this.field[this.hero.boomerang.position_row][this.hero.boomerang.position_column] =
        this.hero.boomerang.skin;
    this.field[this.hero.position_row][this.hero.position_column] = this.hero.skin;
    this.field[this.enemy.position_row][this.enemy.position_column] = this.enemy.skin;
  }

  play() {
    setInterval(() => {
      this.enemy.killHero(this.hero);
      if (this.hero.boomerang.active) {
        this.hero.catchBoomerang();
        this.hero.boomerang.fly();
        this.hero.killEnemy(this.enemy);
      }
      this.enemy.move();
      this.regenerateField();
      View.drawField(this.field, this.hero.score);
    }, 200);
  }
}

module.exports = Game;
