const map = new Array(25).fill(0).map(() => new Array(31).fill(0));

function Init() {
  for (let i = 0; i < 25; i++) {
    if ((i + 3) % 5 === 0) continue;
    for (let j = 0; j < 31; j++) {
      if ((j + 1) % 4 !== 0) {
        map[i][j] = 1;
      }
    }
  }
}

function show(map) {
  for (let i = 0; i < 25; i++) {
    let row = '';
    for (let j = 0; j < 31; j++) {
      row += map[i][j] + ' ';
    }
    console.log(row);
  }
}

const from = new Array(25).fill(0).map(() => new Array(31).fill([-1, -1]));
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

function BFS(map, visited, x, y, targetx, targety) {
  const queue = [];
  queue.push([x, y]);
  visited[x][y] = true;

  while (queue.length > 0) {
    const frontPoint = queue.shift();
    const [curx, cury] = frontPoint;

    for (let i = 0; i < 4; i++) {
      const nextx = curx + dir[i][0];
      const nexty = cury + dir[i][1];

      if (nextx === targetx && nexty === targety) {
        from[targetx][targety] = [curx, cury];
        return;
      }

      if (
        nextx < 0 ||
        nextx >= map.length ||
        nexty < 0 ||
        nexty >= map[0].length
      ) {
        continue;
      }

      if (!visited[nextx][nexty] && map[nextx][nexty] === 0) {
        visited[nextx][nexty] = true;
        queue.push([nextx, nexty]);
        from[nextx][nexty] = [curx, cury];
      }
    }
  }
}

function getPath(from, targetx, targety) {
  const stack = [];
  let x = targetx;
  let y = targety;
  while (x !== -1 || y !== -1) {
    stack.push([x, y]);
    const fromPoint = from[x][y];
    x = fromPoint[0];
    y = fromPoint[1];
  }

  const path = [];
  while (stack.length > 0) {
    path.push(stack.pop());
  }
  return path;
}

function show_path(path) {
  let result = '';
  for (let i = 0; i < path.length - 1; i++) {
    const point = path[i];
    result += `(${point[0]},${point[1]}) --> `;
  }
  const point = path[path.length - 1];
  result += `(${point[0]},${point[1]})`;
  console.log(result);
}

function show_from(from) {
  for (let i = 0; i < from.length; i++) {
    let row = '';
    for (let j = 0; j < from[0].length; j++) {
      const pairPoint = from[i][j];
      if (pairPoint[0] !== -1 && pairPoint[1] !== -1) {
        row += `(${pairPoint[0]},${pairPoint[1]}) `;
      }
    }
    console.log(row);
  }
}

function draw_point(path) {
  const newCoordinates = [];
  for (let i = 0; i < path.length - 1; i++) {
    newCoordinates.push({
      x1: path[i][1],
      y1: path[i][0],
      x2: path[i + 1][1],
      y2: path[i + 1][0],
    });
  }
  return newCoordinates;
}

function main() {
  Init();
  const visited = new Array(25).fill(0).map(() => new Array(31).fill(false));
  let startx, starty, endx, endy;
//   console.log('please input the start point (x,y)');
  // 在此处输入起始点坐标
  startx = 0;
  starty = 0;
//   console.log('please input the end point (x,y)');
  // 在此处输入终点坐标
  endx = 24;
  endy = 30;

  BFS(map, visited, startx, starty, endx, endy);
  const path = getPath(from, endx, endy);

  return path;
//   show_path(path);

  // 将路径转化为与newCoordinates格式相匹配的坐标
//   const newCoords = draw_point(path);
//   console.log(newCoords);
}

// main();
