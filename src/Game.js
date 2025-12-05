const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');

const COLUMN = 30;
const ROW = 10;

class Game {
  constructor() {
    this.hero = new Hero(1, 1);
    this.view = new View();
    this.field = [];
    this.enemiesKilled = 0;
    this.enemy = new Enemy(1);
    this.regenerateField();
  }

  killEnemy() {
    if (!this.enemy.isAlive) return;

    this.enemy.die();
    this.enemiesKilled++;
    console.log(`💥 Враг #${this.enemy.id} убит! Всего: ${this.enemiesKilled}`);

    this.enemy = this.enemy.respawn(this.enemiesKilled + 1);
    this.regenerateField();
  }

  handleAttack() {
    if (
      this.enemy.isAlive &&
      this.hero.position_row === this.enemy.row &&
      this.hero.position_column === this.enemy.col
    ) {
      this.killEnemy();
    }
  }

  regenerateField() {
    this.field = Array(ROW)
      .fill()
      .map(() => Array(COLUMN).fill(' '));

    this.field[this.hero.position_row][this.hero.position_column] = this.hero.skin;

    if (this.enemy.isAlive) {
      this.field[this.enemy.row][this.enemy.col] = this.enemy.skin;
    }
  }

  play() {
    setInterval(() => {
      this.regenerateField();
      View.drawField(this.field);
    }, 1000);
  }
}

module.exports = Game;
