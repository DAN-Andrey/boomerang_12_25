const Boomerang = require('./Boomerang');
const COLUMN = 30;
const ROW = 10;
const View = require('../View');
// Наш герой.

class Hero {
  constructor(position_row, position_column) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.boomerang = new Boomerang(position_row, position_column);
    this.position_row = position_row;
    this.position_column = position_column;
    this.score = 0;
  }

  moveLeft() {
    // Идём влево.
    this.position_column--;
    if (this.position_column < 0) this.position_column = 0;
    if (!this.boomerang.active) {
      this.boomerang.position_column = this.position_column;
      this.boomerang.direction = -1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position_column++;
    if (this.position_column >= COLUMN) this.position_column = COLUMN - 1;
    if (!this.boomerang.active) {
      this.boomerang.position_column = this.position_column;
      this.boomerang.direction = 1;
    }
  }

  moveUp() {
    // Идём вверх.
    this.position_row--;
    if (this.position_row < 0) this.position_row = 0;
    if (!this.boomerang.active) {
      this.boomerang.position_row = this.position_row;
    }
  }

  moveDown() {
    // Идём вниз.
    this.position_row++;
    if (this.position_row >= ROW) this.position_row = ROW - 1;
    if (!this.boomerang.active) {
      this.boomerang.position_row = this.position_row;
    }
  }

  catchBoomerang() {
    if (
      this.position_row === this.boomerang.position_row &&
      this.position_column === this.boomerang.position_column
    )
      this.boomerang.active = false;
  }

  killEnemy(enemy) {
    if (
      (enemy.position_row === this.boomerang.position_row &&
        enemy.position_column === this.boomerang.position_column) ||
      (enemy.position_row === this.boomerang.position_row &&
        enemy.position_column + enemy.direction === this.boomerang.position_column)
    ) {
      enemy.die();
      this.score++;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.active = true;
    this.boomerang.fly();
    View.playBoomerangThrow();
  }

  die() {
    this.skin = '💀';
    View.playHeroDie();
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
