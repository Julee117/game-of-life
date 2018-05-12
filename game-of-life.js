function makeGrid(cols, rows) {
  let arr = new Array();
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function fillRandom() {
  grid = makeGrid(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }
}
