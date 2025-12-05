class Enemy {
  constructor(id = 1) {
    this.id = id;
    this.generateSkin();
    this.row = 1;
    this.col = 25;
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

  die() {
    this.isAlive = false;
    console.log('Enemy is dead!');
  }

  respawn(newId) {
    return new Enemy(newId);
  }
}

module.exports = Enemy;
