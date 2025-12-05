// Сделаем отдельный класс для отображения игры в консоли.
const COLUMN = 30;
const ROW = 10;

class View {
  static drawField(field) {
    let str = '';

    console.clear();

    for (let i = 0; i < ROW; i++) {
      str += '| ';
      for (let j = 0; j < COLUMN; j++) {
        str += field[i][j];
      }
      str += ' |\n';
    }
    console.log('__________________________________');
    console.log(str);
    console.log('__________________________________');
    console.log('\n\n');
    console.log(`Created by Codiki with love`);
  }
}

module.exports = View;
