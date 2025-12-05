const Boomerang = require('./Boomerang');
const { COLUMN, ROW } = require('../View');
// Наш герой.

class Hero {
  constructor(position_row, position_column) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.boomerang = new Boomerang(position_row, position_column);
    this.position_row = position_row;
    this.position_column = position_column;
    this.score = 0;
    this.timeStart = new Date();
  }

  moveLeft() {
    // Идём влево.
    this.position_column--;
    if (this.position_column < 0) this.position_column = 0;
    if (!this.boomerang.active && !this.boomerang.wasStoped) {
      this.boomerang.position_column = this.position_column;
      this.boomerang.direction = -1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position_column++;
    if (this.position_column >= COLUMN) this.position_column = COLUMN - 1;
    if (!this.boomerang.active && !this.boomerang.wasStoped) {
      this.boomerang.position_column = this.position_column;
      this.boomerang.direction = 1;
    }
  }

  moveUp() {
    // Идём вверх.
    this.position_row--;
    if (this.position_row < 0) this.position_row = 0;
    if (!this.boomerang.active && !this.boomerang.wasStoped) {
      this.boomerang.position_row = this.position_row;
    }
  }

  moveDown() {
    // Идём вниз.
    this.position_row++;
    if (this.position_row >= ROW) this.position_row = ROW - 1;
    if (!this.boomerang.active && !this.boomerang.wasStoped) {
      this.boomerang.position_row = this.position_row;
    }
  }

  catchBoomerang() {
    if (this.onePositionWithBoomerang()) {
      this.boomerang.active = false;
      this.boomerang.wasStoped = false;
    }
  }

  onePositionWithBoomerang() {
    return (
      this.position_column === this.boomerang.position_column &&
      this.position_row === this.boomerang.position_row
    );
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
      this.boomerang.active = false;
      this.boomerang.wasStoped = true;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang.active = true;
    this.boomerang.fly();
  }

  die() {
    const now = new Date();

    const time = now - this.timeStart;
    const seconds = Math.round(time / 1000);
    this.skin = '💀';
    console.log('Вы погибли!💀');
    console.log('Ваше время: ', seconds, 'секунд');
    console.log('Врагов убито: ', this.score);
    process.exit();
  }
}

module.exports = Hero;
