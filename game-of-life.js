let myCanvas = document.getElementById("canvas")
let pixel = 20;
let cols = myCanvas.width / pixel;
let rows = myCanvas.height / pixel;
let ctx = myCanvas.getContext("2d");
let grid;
let fps = 10;

fillRandom();

function startLife() {
  setTimeout(function() {
    drawCanvas();
    updateGrid();
    requestAnimationFrame(startLife);
  }, 1000 / fps);
}

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

function countLiveNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = ((x + i) % cols) === -1 ? cols - 1 : (x + i) % cols;
      let row = ((y + j) % rows) === -1 ? rows - 1 : (y + j) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum
}

// update new grid with new state value
function updateGrid() {
  let update = makeGrid(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let neighbors = countLiveNeighbors(grid, i, j);
      let currentState = grid[i][j];
      if (currentState === 0 && neighbors === 3) {
        update[i][j] = 1;
      } else if (currentState === 1 && neighbors === 2 || currentState === 1 && neighbors === 3) {
        update[i][j] = 1;
      } else if (currentState === 1 && neighbors < 2 || currentState === 1 && neighbors > 3) {
        update[i][j] = 0;
      } else {
        update[i][j] = currentState;
      }
    }
  }
  grid = update;
}
