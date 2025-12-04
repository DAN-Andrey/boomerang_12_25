// Сделаем отдельный класс для отображения игры в консоли.
const COLUMN = 30;
const ROW = 10;

class View {
  static drawField(field, hero) {
    let str = '';

    console.clear();

    for (let i = 0; i < ROW; i++) {
      for (let j = 0; j < COLUMN; j++) {
        str += field[i][j];
      }
      str += '\n';
    }
    console.log(str);
    console.log('posithion ', hero.position_row, hero.position_column);

    console.log('\n\n');
    console.log(`Created by Codiki with love`);
  }
}

module.exports = View;
