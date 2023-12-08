var mysql = require('mysql');
var util = require('util');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'maoyangyang12345',
    port: 3306,
    database: 'parkingsystem'
});

connection.connect();

// 用 util.promisify 方法将异步回调转换成 Promise
const query = util.promisify(connection.query).bind(connection);

// 对 vipcars 数据库操作：查询
async function selectcars(carNumber) {
    try {
        var sql = 'select * from vipcars where carNumber = ?';
        const result = await query(sql, carNumber);
        console.log('[selectcars result] :', result);
        return result;
    } catch (error) {
        console.log('[selectcars error] - ', error.message);
        throw error;
    }
}

// 对 parkinglot 数据库进行操作：查询、修改
async function selectpark(startX,startY) {
    try {
        var sql = 'select * from parkinglot where isUsing = 0';
        const result = await query(sql);
        console.log('[selectpark result] :', result[0]);

        let nearPark = null;
        let nearDistance = Infinity;
        result.forEach(element => {
            let park_x = element.park_X;
            let park_y = element.park_Y;
            let distance = (park_x-startX)*(park_x-startX) + (park_y-startY)*(park_y-startY);
            if(nearPark === null || distance < nearDistance)
            {
                nearPark = element;
                nearDistance = distance;
            }
        });

        return nearPark;
    } catch (error) {
        console.log('[selectpark error] - ', error.message);
        throw error;
    }
}

//获取现在空车位的车位数
async function selectpark_number() {
    try {
        //使用count(*)直接获取车位数
        var sql = 'SELECT COUNT(*) as carNum FROM parkinglot WHERE isUsing = 0';
        const result = await query(sql);
        console.log('[selectpark_number result] :', result[0].carNum);

        return result[0].carNum;
    } catch (error) {
        console.log('[selectpark_number error] - ', error.message);
        throw error;
    }
}


async function selectparkUsing() {
    try {
        var sql = 'select * from parkinglot where isUsing = 1';
        const result = await query(sql);
        return result;
    } catch (error) {
        console.log('[selectparkUsing error] - ', error.message);
        throw error;
    }
}

async function updatepark(park_X, park_Y, value) {
    try {
        var sql = 'update parkinglot set isUsing = ? where park_X = ? and park_Y = ?';
        const modSqlParams = [value, park_X, park_Y];
        const result = await query(sql, modSqlParams);
        console.log('[updatepark] : ', result);
        return result;
    } catch (error) {
        console.log('[updatepark error] - ', error.message);
        throw error;
    }
}

// 对 carpark 数据进行操作：查询、增加、删除
async function selectcarpark(carNumber) {
    try {
        var sql = 'select * from carpark where carNumber = ?';
        const result = await query(sql, carNumber);
        console.log('[selectcarpark result] :', result);
        return result[0];
    } catch (error) {
        console.log('[selectcarpark error] - ', error.message);
        throw error;
    }
}

async function insertcarpark(carNumber, park_X, park_Y) {
    try {
        var sql = 'insert into carpark values(?,?,?,?)';
        var date = new Date();
        const modSqlParams = [carNumber, park_X, park_Y, date];
        const result = await query(sql, modSqlParams);
        console.log('insert id :', result);
    } catch (error) {
        console.log('[insertcarpark error] - ', error.message);
        throw error;
    }
}

async function deletecarpark(carNumber) {
    try {
        var sql = 'delete from carpark where carNumber = ?';
        const result = await query(sql, carNumber);
        console.log('deletecarpark : ', result);
    } catch (error) {
        console.log('[deletecarpark error] - ', error.message);
        throw error;
    }
}

module.exports = {
    selectcars: selectcars,
    selectpark: selectpark,
    selectpark_number: selectpark_number,
    selectparkUsing: selectparkUsing,
    updatepark: updatepark,
    selectcarpark: selectcarpark,
    deletecarpark: deletecarpark,
    insertcarpark: insertcarpark
};
