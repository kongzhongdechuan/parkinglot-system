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

function findRoadByPark(endX)
{
    //靠近车位的路要向下寻找
    if(endX % 5 == 0)
        endX = endX+2;
    else 
        endX = endX-1;
    return endX;
}


//对于车位，一个车位通过两个坐标表示。但是使用的时候仅仅使用上面的坐标
function getCoordinates(startX, startY, endX, endY) {

    //找到靠近车库的路块坐标
    endX = findRoadByPark(endX);
    console.log("The road near the parkinglot is : ",endX,endY);

    Init();
    const visited = new Array(25).fill(0).map(() => new Array(31).fill(false));

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

    BFS(map, visited, startX, startY, endX, endY);
    const path = getPath(from, endX, endY);

    //console.log("path:",path);

    const corrdinate = pathChangeToJson(path);
    //console.log("corrdinate:",corrdinate);
    return corrdinate;


    const newCoordinates = [
        { x1: 150, y1: 150, x2: 350, y2: 150 },
        { x1: 250, y1: 250, x2: 450, y2: 250 },
        // 添加更多坐标对象
    ];

    console.log("newcordinate:",newCoordinates);
    //return newCoordinates;
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


//转化的时候考虑街道是两格
function changex(x) {
    var num = x/4;
    return (x + num + 1.5) * (1100 / 40);
}
function changey(y) {
    var num = 0;
    if(y <= 2)
        num = 0;
    else if(y <= 7)
        num = 1;
    else if(y <= 12)
        num = 2;
    else if(y <= 17)
        num = 3;
    else if(y <= 22)
        num = 4;
    else if(y <= 27)
        num = 5;
    else if(y <= 32)
        num = 6;
    return (y + num + 1.5) * (520 / 32);
}

//javaScirpt与cpp的x和y坐标刚好对调一下
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
