class Enemy {
  constructor(id = 1) {
    this.id = id;
    this.generateSkin();
    this.position = 28;
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
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.isAlive = false;
    console.log('Enemy is dead!');
  }

  respawn(newId) {
    return new Enemy(newId);
  }
}

module.exports = Enemy;
