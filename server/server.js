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



//定义全局变量
app.locals.car_name = null;



app.use(express.static('public'))

//进入127.0.0.1:8888首先触发的操作
app.get('/', function (req, res) {
  res.sendFile('html/index.html', { root: 'public' });
})

//被upload_picture给替代了
app.get('/car_enter', function (req, res) {
  console.log("car_enter");
  const newPagePath = __dirname + '/public' + '/html/index.html';

  fs.readFile(newPagePath, 'utf8', function (err, data) {
    if (err) {
      console.error('Error reading new_page.html', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
})

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
app.post('/upload_picture', upload.single('car-image'), async (req, res) => {
  // 调用getCarNumber.js处理图片
  /*getCarNumberMoudl.getCarNumber()
    .then(carNumber => {
      res.json({ carNumber });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to recognize car number' });
    });*/
  try {
    const car_number = await getCarNumberMoudl.getCarNumber();
    app.locals.car_name = car_number; // 设置全局变量
    console.log("time:", time);
    time = time + 1;
    console.log("/uploat_picture Car Number:", car_number);



    //查看mysql运行结果
    /*
    console.log(sql.selectcars(car_number));
    console.log(sql.selectpark());
    console.log(sql.updatepark(0,0,1));
    console.log(sql.insertcarpark(car_number,0,0));
    console.log(sql.selectcarpark(car_number));
    console.log(sql.deletecarpark(car_number));
    */


    res.json({ carNumber: car_number, coordinatesUrl: `/get_coordinates?car_number=${car_number}` });

    //这里可以添加一些获取数据库信息比对的结果
    //插入数据库操作，车号、停车场车位、时间
    //res.json({ carNumber: car_number });
    //添加响应



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});


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
      console.log("car_exit  , park_x : ",park_x," park_y : ",park_y," parkTime : ",parkTime);

      await sql.deletecarpark(car_number);
      await sql.updatepark(park_x, park_y, 0);

      const parkCost = cost.parkcost(parkTime);
      console.log("car_exit  ,parkCost : ",parkCost);

      res.json({ carNumber: car_number, parkCost: parkCost });
    } else {
      res.status(404).json({ error: '停车场中未找到该车辆' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to recognize car number' });
  }
});


app.get('/show_alreadyParking',async function(req,res) {
  try{
    const parkUsing = sql.selectparkUsing();
    const transformparkUsing = getParkUsing(parkUsing);
    res.json(transformparkUsing);
  }catch(error){
    console.error(error);
    res.status(500).send('show_alreadyParking Server Error');
  }
});

//获取坐标路径，传给前端显示
app.get('/get_coordinates', async function (req, res) {

  try {

    // 通过请求参数获取 car_number,等待car_number赋值之后才进行操作
    while (!app.locals.car_name) {
      await new Promise(resolve => setTimeout(resolve, 100)); // 等待100毫秒
    }

    const car_number = app.locals.car_name;
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
    await sql.insertcarpark(car_number, endX, endY);




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