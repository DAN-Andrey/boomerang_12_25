const COLUMN = 30;
const ROW = 10;
// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position_row, position_column, direction) {
    this.skin = '🌀';
    this.active = false;
    this.position_row = position_row;
    this.position_column = position_column;
    this.direction = this.direction;
  }

  fly() {
    if (this.direction === 'rigth') this.moveRight();
    if (this.direction === 'left') this.moveLeft();
  }

  moveLeft() {
    // Летит влево.
    this.position_column--;
    if (this.position_column <= 0) this.direction = 'rigth';
  }

  moveRight() {
    // Летит вправо.
    this.position_column++;
    if (this.position_column >= COLUMN - 1) this.direction = 'left';
  }
}

module.exports = Boomerang;
