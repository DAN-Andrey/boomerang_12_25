const play = require('play-sound')({});

class Sound {
  static playEnemyDie() {
    play.play('./src/sounds/congratulations.wav', () => {});
  }

  static playHeroDie() {
    play.play('./src/sounds/system-fault.wav', () => {});
  }

  static playBoomerangThrow() {
    play.play('./src/sounds/twirl.wav', () => {});
  }
}

module.exports = Sound;
