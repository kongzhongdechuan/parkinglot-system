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

//获取坐标路径，传给前端显示
app.get('/get_coordinates', async function (req, res) {

  //!!!!!!!!!!!!!!!!!!这里需要调用mySql来获取车位信息
  try{
    const park = await sql.selectpark();
    console.log("park is :",park[0]);
  }
  catch(error)
  {
    console.error(error);
  }









//(2,0)->(24,27)
  const startX = 2;
  const startY = 0;
  const endX = 24;
  const endY = 27;

  // 模拟坐标数组（您应根据实际需求提供真实的坐标数组）
  const coordinates = getArrayMoudle.getCoordinates(startX, startY, endX, endY);
  console.log("get_coordinates ",time);
  time = time+1;

  res.json(coordinates); // 将坐标数组作为JSON响应发送给前端
});


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
    var car_number = await getCarNumberMoudl.getCarNumber();
    console.log("time:",time);
    time = time+1;
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







    
    //这里可以添加一些获取数据库信息比对的结果
    //插入数据库操作，车号、停车场车位、时间
    res.json({ carNumber: car_number });
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