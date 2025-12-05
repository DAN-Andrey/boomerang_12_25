// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 2 }); // герой слева
    this.enemy = new Enemy(1); // первый враг
    this.view = new View();
    this.enemiesKilled = 0; // СЧЁТЧИК УБИТЫХ — ТВОЯ ЧАСТЬ
    this.track = [];
    this.regenerateTrack();
  }

  killEnemy() {
    if (this.enemy.isAlive) {
      this.enemy.die();
      this.enemiesKilled++;
      console.log(`💥 Враг #${this.enemy.id} убит! Всего: ${this.enemiesKilled}`);
      this.enemy = this.enemy.respawn(this.enemiesKilled + 1);
    }
  }

  handleAttack() {
    if (this.hero.position === this.enemy.position && this.enemy.isAlive) {
      this.killEnemy();
    }
    this.regenerateTrack();
  }

  regenerateTrack() {
    this.track = new Array(this.trackLength).fill(' ');
    // Отображаем врага ТОЛЬКО если он жив
    if (this.enemy.isAlive) {
      this.track[this.enemy.position] = this.enemy.skin;
    }
    // Герой всегда отображается
    this.track[this.hero.position] = this.hero.skin;
  }

  check() {
    // Столкновение героя и врага → смерть героя
    if (this.hero.position === this.enemy.position && this.enemy.isAlive) {
      this.hero.die();
    }
  }

  play() {
    // Игровой цикл
    const gameLoop = () => {
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    };

    // Пример: автоматическая атака каждые 4 секунды — ТОЛЬКО ДЛЯ ТЕСТА ТВОЕЙ ЛОГИКИ
    // Позже эту строку уберёт Андрей или Даша, когда подключит управление
    setInterval(() => {
      this.handleAttack(); // ← ТВОЙ МЕТОД
    }, 4000);

    gameLoop();
    setInterval(gameLoop, 500);
  }
}

module.exports = Game;
