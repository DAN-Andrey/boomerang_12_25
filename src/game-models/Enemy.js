const COLUMN = 30;
const ROW = 10;
// Враг.

class Enemy {
  constructor() {
    this.spawn();
  }

  spawn() {
    this.generateSkin();
    this.position_row = Math.floor(Math.random() * ROW);
    this.position_column = Math.floor(Math.random() * COLUMN);
    this.direction = -1;
  }

  generateSkin() {
    const skins = [
      '👾',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  move() {
    if (this.direction === 1) this.moveRight();
    if (this.direction === -1) this.moveLeft();
  }

  moveLeft() {
    // Идет влево.
    this.position_column--;
    if (this.position_column <= 0) this.direction = 1;
  }

  moveRight() {
    // Идет вправо.
    this.position_column++;
    if (this.position_column >= COLUMN - 1) this.direction = -1;
  }

  killHero(hero) {
    if (
      hero.position_row === this.position_row &&
      hero.position_column === this.position_column
    ) {
      hero.die();
    }
  }

  die() {
    this.spawn();
  }
}

module.exports = Enemy;
