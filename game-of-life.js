let myCanvas = document.getElementById("canvas")
let pixel = 20;
let cols = myCanvas.width / pixel;
let rows = myCanvas.height / pixel;
let ctx = myCanvas.getContext("2d");
let grid;

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
