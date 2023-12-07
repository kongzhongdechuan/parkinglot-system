var http = require('http');
var fs = require('fs');
var url = require('url');
var getArrayMoudle = require('./getcoordinate')

var express = require('express');
var app = express();

var path = require('path')
var getCarNumberMoudl = require('./getCarNumber')
var multer = require('multer')

var sql = require('./getMysql')

var cost = require('./parkCost');

var Usingpark = require('./getParkUsing');


//定义全局变量
//app.locals.car_name = null;



app.use(express.static('public'))

//进入127.0.0.1:8888首先触发的操作
app.get('/', function (req, res) {
  res.sendFile('html/index.html', { root: 'public' });
})
//车辆进入的时候展示车位信息
app.get('/show_alreadyParking', async function (req, res) {
  try {
    const parkUsing = await sql.selectparkUsing();
    const transformparkUsing = Usingpark.getParkUsing(parkUsing);
    res.json(transformparkUsing);
  } catch (error) {
    console.error(error);
    res.status(500).send('show_alreadyParking Server Error');
  }
});


//调试用变量
var time = 1;


// 配置文件上传中间件
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/images')); // 上传的图片保存到public/images目录
  },
  filename: (req, file, cb) => {
    cb(null, 'car.jpg'); // 保存的文件名为car.jpg
  }
});

const upload = multer({ storage });


// 处理上传的图片,返回车牌号
app.post('/car_enter', upload.single('car-image'), async (req, res) => {
  // 调用getCarNumber.js处理图片
  try {
    
    console.log("time:", time);
    time = time + 1;
    console.log("car_enter start -----------------------------------------------------------");

    const car_number = await getCarNumberMoudl.getCarNumber();
    //app.locals.car_name = car_number; // 设置全局变量
    console.log("/car_enter Car Number:", car_number);
    res.json({ carNumber: car_number});
    console.log("car_enter end ------------------------------------------------------------");
  } catch (error) {
    console.error('car_enter:'+error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});


// 获取坐标路径，传给前端显示
app.post('/get_coordinates', async function (req, res) {
  try {


    console.log('time:',time);
    time = time+1;
    console.log("get_coordinate start -------------------------------------------------------");



    // 通过 upload.single('car-image') 中间件处理文件上传
    //和car_enter直接在第一行使用一样，之前一直以为是这里的问题，其实不是
    upload.single('car-image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('File upload error');
      }

      try {
        // 获取车牌号
        const car_number = await getCarNumberMoudl.getCarNumber();
        console.log("get_coordinates car_number : ", car_number);

        // 选择可以选择的车位
        const park = await sql.selectpark();
        console.log("park is :", park);

        const park_x = park.park_X;
        const park_y = park.park_Y;

        // 车位状态信息改变
        sql.updatepark(park_x, park_y, 1);

        // (2,0)->(24,27)
        const startX = 12;
        const startY = 0;
        const endX = park_x;
        const endY = park_y;

        console.log("endx : ", endX, " endy : ", endY);

        // 对carpark进行添加
        sql.insertcarpark(car_number, endX, endY);

        // 模拟坐标数组（您应根据实际需求提供真实的坐标数组）
        const coordinates = getArrayMoudle.getCoordinates(startX, startY, endX, endY);
        res.json(coordinates); // 将坐标数组作为JSON响应发送给前端

        console.log("get_coordinates end --------------------------------------------------------");
      } catch (error) {
        console.error(error);
        res.status(500).send('Get Park Server Error');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Get Park Server Error');
  }
});




//车辆退出，返回车牌和车费
app.post('/car_exit', upload.single('car-image'), async function (req, res) {

  try {

    console.log("time:", time);
    time = time + 1;
    console.log("car_exit start -----------------------------------------------------------");


    const car_number = await getCarNumberMoudl.getCarNumber();
    //app.locals.car_name = car_number; // 设置全局变量
    
    console.log("/car_exit Car Number:", car_number);

    //console.log("sql.selectpark :", await sql.selectcarpark(car_number));
    const selectCarparkResult = await sql.selectcarpark(car_number);
    //console.log("selectCarparkResult : ", selectCarparkResult);
    if (selectCarparkResult) {
      const park_x = selectCarparkResult.park_X;
      const park_y = selectCarparkResult.park_Y;
      const parkTime = selectCarparkResult.enterTime;
      console.log("car_exit  , park_x : ", park_x, " park_y : ", park_y, " parkTime : ", parkTime);
      const parkCost = cost.parkcost(parkTime);
      console.log("car_exit  ,parkCost : ", parkCost);

      res.json({ carNumber: car_number, parkCost: parkCost });
    } else {
      res.json({ carNumber: car_number, parkCost: 0 });
      // res.status(404).json({ error: '停车场中未找到该车辆' });
    }

    console.log("car_exit end --------------------------------------------------------------------");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});

//获取车牌号，根据车牌号删除数据库内容。返回车位信息
app.post('/car_exit_Database', upload.single('car-image'), async function (req, res) {

  try {

    console.log("time:", time);
    time = time + 1;
    console.log("car_exit_Datebase start --------------------------------------------------");

    const car_number = await getCarNumberMoudl.getCarNumber();
    //app.locals.car_name = car_number; // 设置全局变量
    
    console.log("/car_exit_Database Car Number:", car_number);

    //console.log("sql.selectpark :", await sql.selectcarpark(car_number));
    const selectCarparkResult = await sql.selectcarpark(car_number);
    //console.log("selectCarparkResult : ", selectCarparkResult);
    if (selectCarparkResult) {
      const park_x = selectCarparkResult.park_X;
      const park_y = selectCarparkResult.park_Y;
      const parkTime = selectCarparkResult.enterTime;
      console.log("car_exit  , park_x : ", park_x, " park_y : ", park_y, " parkTime : ", parkTime);


      console.log("car_exit_Database 操作SQl语句--------");
      sql.deletecarpark(car_number);
      sql.updatepark(park_x, park_y, 0);

    } /*else {
      res.status(404).json({ error: '停车场中未找到该车辆' });
    }*/   //注释掉停车场未找到该车辆信息

    console.log('car_exit_Database : 车位占用情况');

    //返回车位占用情况
    const parkUsing = await sql.selectparkUsing();
    const transformparkUsing = Usingpark.getParkUsing(parkUsing);
    console.log('执行car_exit_Database')
    res.json(transformparkUsing);


    console.log("car_exit_Database end ---------------------------------------------");

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});










var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})