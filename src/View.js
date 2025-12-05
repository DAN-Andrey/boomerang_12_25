const COLUMN = 30;
const ROW = 10;
const play = require('play-sound')({});

class View {
  static drawField(field, score) {
    let str = '';
    console.clear();

    for (let i = 0; i < ROW; i++) {
      for (let j = 0; j < COLUMN; j++) {
        str += field[i][j];
      }
      if (i < ROW - 1) str += '\n';
    }

    console.log('______________________________');
    console.log(str);
    console.log('‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾');
    console.log('Врагов убито: ', score);
    console.log('\n\n');
    console.log(`Created by Codiki with love`);
  }

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

module.exports = View;
