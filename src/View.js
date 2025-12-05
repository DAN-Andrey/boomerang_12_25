// Сделаем отдельный класс для отображения игры в консоли.
const COLUMN = 30;
const ROW = 10;

class View {
  static drawField(field) {
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
    console.log('\n\n');
    console.log(`Created by Codiki with love`);
  }
}

module.exports = View;
