let myCanvas = document.getElementById("canvas")
let pixel = 20;
let cols = myCanvas.width / pixel;
let rows = myCanvas.height / pixel;
let ctx = myCanvas.getContext("2d");
let grid;

// make empty 2D array
function makeGrid(cols, rows) {
  let arr = new Array();
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

// fill cells randomly with 0 and 1
function fillRandom() {
  grid = makeGrid(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }
}

function drawCanvas() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] == 1) {
        ctx.fillStyle = "#33DDFF";
        ctx.fillRect((i * pixel), (j * pixel), pixel - 1, pixel - 1);
      } else {
        ctx.fillStyle = "#F1F4F4";
        ctx.fillRect((i * pixel), (j * pixel), pixel - 1, pixel - 1);
      }
    }
  }
}
