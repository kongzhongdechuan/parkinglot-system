
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

function getParkUsing(inputArray)
{
    const resultArray = [];
    for(let i = 0; i < inputArray.length; i++) {
        resultArray.push({
            x1:changex(inputArray[i].park_X),
            y1:changey(inputArray[i].park_Y),
            x2:changex(inputArray[i].park_X+1),
            y2:changey(inputArray[i],park_Y)
        })
    }
    return resultArray;
}

module.exports = {
    getParkUsing,
};