const { COLUMN, ROW } = require('../View');
// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position_row, position_column, direction) {
    this.skin = '🌀';
    this.active = false;
    this.wasStoped = false;
    this.position_row = position_row;
    this.position_column = position_column;
    this.direction = 1;
  }

  fly() {
    if (this.active) {
      if (this.direction === 1) this.moveRight();
      if (this.direction === -1) this.moveLeft();
    }
  }

  moveLeft() {
    // Летит влево.
    this.position_column--;
    if (this.position_column <= 0) this.direction = 1;
  }

  moveRight() {
    // Летит вправо.
    this.position_column++;
    if (this.position_column >= COLUMN - 1) this.direction = -1;
  }
}

module.exports = Boomerang;
