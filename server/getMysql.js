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

var sql = 'select * from vipcars';

connection.query(sql,function(error,result){
    if(error){
        console.log('[select error] - ',error.message);
        return;
    }
    console.log(result);
});

connection.end();