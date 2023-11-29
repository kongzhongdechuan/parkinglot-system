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

function findRoadByPark(endX) {
    if (endX % 5 == 0)
        endX = endX + 2;
    else
        endX = endX - 1;
    return endX;
}

function getCoordinates(startX, startY, endX, endY) {
    endX = findRoadByPark(endX);
    console.log("The road near the parkinglot is : ", endX, endY);

    Init();
    const distance = new Array(25).fill(0).map(() => new Array(31).fill(Number.MAX_VALUE));
    const visited = new Array(25).fill(0).map(() => new Array(31).fill(false));
    const from = new Array(25).fill(0).map(() => new Array(31).fill([-1, -1]));
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function Dijkstra(map, distance, visited, from, x, y, targetx, targety) {
        distance[x][y] = 0;

        for (let k = 0; k < 25 * 31; k++) {
            let minDist = Number.MAX_VALUE;
            let curx = -1;
            let cury = -1;

            for (let i = 0; i < 25; i++) {
                for (let j = 0; j < 31; j++) {
                    if (!visited[i][j] && distance[i][j] < minDist) {
                        minDist = distance[i][j];
                        curx = i;
                        cury = j;
                    }
                }
            }

            if (curx === -1 || cury === -1) break;

            visited[curx][cury] = true;

            for (let i = 0; i < 4; i++) {
                const nextx = curx + dir[i][0];
                const nexty = cury + dir[i][1];

                if (
                    nextx < 0 ||
                    nextx >= map.length ||
                    nexty < 0 ||
                    nexty >= map[0].length
                ) {
                    continue;
                }

                if (distance[nextx][nexty] > distance[curx][cury] + 1 && map[nextx][nexty] === 0) {
                    distance[nextx][nexty] = distance[curx][cury] + 1;
                    from[nextx][nexty] = [curx, cury];
                }
            }
        }
    }

    Dijkstra(map, distance, visited, from, startX, startY, endX, endY);
    const path = getPath(from, endX, endY);

    const coordinate = pathChangeToJson(path);
    return coordinate;
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

    console.log("path: " + path);
    return path;
}

function changex(x) {
    var num = x / 4;
    return (x + num + 1.5) * (1100 / 40);
}

function changey(y) {
    var num = 0;
    if (y <= 2)
        num = 0;
    else if (y <= 7)
        num = 1;
    else if (y <= 12)
        num = 2;
    else if (y <= 17)
        num = 3;
    else if (y <= 22)
        num = 4;
    else if (y <= 27)
        num = 5;
    else if (y <= 32)
        num = 6;
    return (y + num + 1.5) * (520 / 32);
}

function pathChangeToJson(path) {
    const newCoordinates = [];
    for (let i = 0; i < path.length - 1; i++) {
        newCoordinates.push({
            x1: changex(path[i][1]),
            y1: changey(path[i][0]),
            x2: changex(path[i + 1][1]),
            y2: changey(path[i + 1][0])
        });
    }
    return newCoordinates;
}

module.exports = {
    getCoordinates,
};
