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
app.locals.car_name = null;



app.use(express.static('public'))

//进入127.0.0.1:8888首先触发的操作
app.get('/', function (req, res) {
  res.sendFile('html/index.html', { root: 'public' });
})

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
// 处理上传的图片
app.post('/car_enter', upload.single('car-image'), async (req, res) => {
  // 调用getCarNumber.js处理图片
  try {
    const car_number = await getCarNumberMoudl.getCarNumber();
    app.locals.car_name = car_number; // 设置全局变量
    console.log("time:", time);
    time = time + 1;
    console.log("/uploat_picture Car Number:", car_number);
    res.json({ carNumber: car_number});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});


//车辆退出，返回车牌和车费
app.post('/car_exit', upload.single('car-image'), async function (req, res) {

  try {
    const car_number = await getCarNumberMoudl.getCarNumber();
    app.locals.car_name = car_number; // 设置全局变量
    console.log("time:", time);
    time = time + 1;
    console.log("/car_exit Car Number:", car_number);

    console.log("sql.selectpark :", await sql.selectcarpark(car_number));
    const selectCarparkResult = await sql.selectcarpark(car_number);
    console.log("selectCarparkResult : ", selectCarparkResult);
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

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});

app.post('/car_exit_Database', upload.single('car-image'), async function (req, res) {

  try {
    const car_number = await getCarNumberMoudl.getCarNumber();
    app.locals.car_name = car_number; // 设置全局变量
    console.log("time:", time);
    time = time + 1;
    console.log("/car_exit Car Number:", car_number);

    console.log("sql.selectpark :", await sql.selectcarpark(car_number));
    const selectCarparkResult = await sql.selectcarpark(car_number);
    console.log("selectCarparkResult : ", selectCarparkResult);
    if (selectCarparkResult) {
      const park_x = selectCarparkResult.park_X;
      const park_y = selectCarparkResult.park_Y;
      const parkTime = selectCarparkResult.enterTime;
      console.log("car_exit  , park_x : ", park_x, " park_y : ", park_y, " parkTime : ", parkTime);

      sql.deletecarpark(car_number);
      sql.updatepark(park_x, park_y, 0);

      //返回车位占用情况
      const parkUsing = await sql.selectparkUsing();
      const transformparkUsing = Usingpark.getParkUsing(parkUsing);
      console.log('执行car_exit_Database')
      res.json(transformparkUsing);

    } else {
      res.status(404).json({ error: '停车场中未找到该车辆' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});






//获取坐标路径，传给前端显示
app.get('/get_coordinates',upload.single('car-image'),async function (req, res) {

  try {

    // 通过请求参数获取 car_number,等待car_number赋值之后才进行操作
    // while (!app.locals.car_name) {
    //   await new Promise(resolve => setTimeout(resolve, 100)); // 等待100毫秒
    // }

    const car_number = await getCarNumberMoudl.getCarNumber();
    console.log("car_number : ", car_number);
    //选择可以选择的车位
    const park = await sql.selectpark();
    console.log("park is :", park);

    const park_x = park.park_X;
    const park_y = park.park_Y;

    sql.updatepark(park_x, park_y, 1);

    //(2,0)->(24,27)
    const startX = 12;
    const startY = 0;
    const endX = park_x;
    const endY = park_y;

    console.log("endx : ", endX, " endy : ", endY);

    //对carpark进行添加
    sql.insertcarpark(car_number, endX, endY);




    // 模拟坐标数组（您应根据实际需求提供真实的坐标数组）
    const coordinates = getArrayMoudle.getCoordinates(startX, startY, endX, endY);
    console.log("get_coordinates ", time);
    time = time + 1;

    res.json(coordinates); // 将坐标数组作为JSON响应发送给前端
  }
  catch (error) {
    console.error(error);
    res.status(500).send('Get Park Server Error');
  }
});



var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})