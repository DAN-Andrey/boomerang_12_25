class Enemy {
  constructor(id = 1) {
    this.id = id;
    this.generateSkin();
    this.row = 1;
    this.col = 28;
    this.isAlive = true;
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

  moveLeft() {
    if (this.isAlive && this.col > 0) {
      this.col -= 1;
    }
  }

  die() {
    if (!this.isAlive) return;
    this.isAlive = false;
    console.log('Enemy is dead!');
  }

  respawn(newId) {
    return new Enemy(newId);
  }

  hasTouchedHero(heroRow, heroCol) {
    return this.isAlive && this.row === heroRow && this.col === heroCol;
  }

  wasHitByHero(heroRow, heroCol) {
    return this.isAlive && this.row === heroRow && this.col === heroCol;
  }
}

module.exports = Enemy;
