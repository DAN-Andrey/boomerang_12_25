const COLUMN = 30;
const ROW = 10;
// Наш герой.

class Hero {
  constructor(position_row, position_column) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position_row = position_row;
    this.position_column = position_column;
  }

  moveLeft() {
    // Идём влево.
    if (this.position_row > 0) this.position_column--;
  }

  moveRight() {
    // Идём вправо.
    if (this.position_row < ROW) this.position_column++;
  }

  moveUp() {
    // Идём влево.
    if (this.position_column > 0) this.position_row--;
  }

  moveDown() {
    // Идём влево.
    if (this.position_column < COLUMN) this.position_row++;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
