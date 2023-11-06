var mysql = require('mysql')
var connection = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : 'maoyangyang12345',
        port : 3306,
        database : 'parkingsystem'
    }
);
connection.connect();

/*
var sql = 'select * from vipcars';

connection.query(sql,function(error,result){
    if(error){
        console.log('[select error] - ',error.message);
        return;
    }
    console.log(result);
});*/


//对vipcars数据库操作：查询
function selectcars(carNumber) {
    var sql = 'select * from vipcars where carNumber = ?';
    connection.query(sql,carNumber,function(error,result){
        if(error){
            console.log('[selectcars error] - ',error.message);
            return ;
        }
        console.log('[selectcars result] :',result);
        return result;
    });
}




//对parkinglot数据库进行操作：查询、修改

function selectpark(){
    var sql = 'select * from parkinglot where isUsing = 0';
    connection.query(sql,function(error,result){
        if(error){
            console.log('[selectpark error] - ',error.message);
            return ;

        }
        console.log('[selectpark result] :',result);
        return result;
    });
}

function updatepark(park_X,park_Y,value){
    var sql = 'update parkinglot set isUsing = ? where park_X = ? and park_Y = ?';
    var modSqlParams = [value,park_X,park_Y];
    connection.query(sql,modSqlParams,function(error,result){
        if(error){
            console.log('[updatepark error] - ',error.message);
            return ;
        }
        console.log('[updatepark] : ',result);
        return result;
    });
}

//对carpark数据进行操作： 查询、增加、删除
function selectcarpark(carNumber){
    var sql = 'select * from carpark where carNumber = ?';
    connection.query(sql,carNumber,function(error,result){
        if(error){
            console.log('[selectcarpar error] - ',error.message);
            return ;
        }
        console.log('[selectcarpar] : ',result);
        return result;
    });
}

function insertcarpark(carNumber,park_X,park_Y) {
    var sql = 'insert into carpark values(?,?,?,?)';
    var date = new Date();
    var modSqlParams = [carNumber,park_X,park_Y,date];
    
    connection.query(sql,modSqlParams,function(error,result){
        if(error){
            console.log('[insert error] - ',error.message);
            return ;
        }
        console.log('insert id :',result);
    });
}

function deletecarpark(carNumber){
    var sql = 'delete from carpark where carNumber = ?';
    connection.query(sql,carNumber,function(error,result){
        if(error){
            console.log('[deletecarpark error] - ',error.message);
            return ;
        }
        console.log('deletecarpark : ',result);
    });
}

//connection.end();
module.exports = {
    selectcars : selectcars,
    selectpark : selectpark,
    updatepark : updatepark,
    selectcarpark : selectcarpark,
    deletecarpark : deletecarpark,
    insertcarpark : insertcarpark
};