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
    console.log("show_alreadyParking start -----------------------------------------------------------");

    const parkUsing = await sql.selectparkUsing();

    console.log('parkUsing:',parkUsing);

    const transformparkUsing = Usingpark.getParkUsing(parkUsing);
    res.json(transformparkUsing);
    console.log("show_alreadyParking end -----------------------------------------------------------");

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
// 处理上传的图片,返回车牌号
app.post('/car_enter', async (req, res) => {
  // 调用 getCarNumber.js 处理图片
  try {
    console.log("time:", time);
    time = time + 1;
    console.log("car_enter start -----------------------------------------------------------");

    // 使用 await 保证 upload.single 执行完成
    upload.single('car-image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('文件上传错误');
      }

      try {
        // 获取车牌号
        const car_number = await getCarNumberMoudl.getCarNumber();
        console.log("/car_enter 车牌号:", car_number);
        res.json({ carNumber: car_number });
        console.log("car_enter 结束 ------------------------------------------------------------");
      } catch (error) {
        console.error('car_enter 错误:' + error);
        res.status(500).json({ error: '无法识别车牌号' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('车辆进入服务器错误');
  }
});

//展示要停放的车位
app.post('/get_willParkinglot', async function (req, res) {
  try {
    console.log('time:', time);
    time = time + 1;
    console.log("get_willParkinglot start -------------------------------------------------------");

    const startX = 12;
    const startY = 0;
    const park = await sql.selectpark(startX, startY);
    console.log("park is :", park);

    const park_x = park.park_X;
    const park_y = park.park_Y;

    // 将两个点坐标填入路径，并转换成 JSON 格式
    const path = [];
    path.push({ park_X: park_x, park_Y: park_y, isUsing: 1 });
    path.push({ park_X: park_x + 0.1, park_Y: park_y, isUsing: 1 });

    console.log('path:', path);

    // 将坐标转化为像素格式
    const transformWillPark = Usingpark.getParkUsing(path);

    console.log('执行 get_WillParkinglot');
    res.json(transformWillPark);

    console.log("get_willParkinglot end ----------------------------------------------------------");
  } catch (error) {
    console.error("get_WillPark error", error);
    res.status(500).send('get_WillPark Error');
  }
});




// 获取坐标路径，传给前端显示
app.post('/get_coordinates', async function (req, res) {
  try {


    console.log('time:', time);
    time = time + 1;
    console.log("get_coordinate start -------------------------------------------------------");



    // 通过 upload.single('car-image') 中间件处理文件上传
    //和car_enter直接在第一行使用一样，之前一直以为是这里的问题，其实不是
    await upload.single('car-image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('File upload error');
      }

      try {
        // 获取车牌号
        const car_number = await getCarNumberMoudl.getCarNumber();
        console.log("get_coordinates car_number : ", car_number);

        //定义起始位置坐标
        const start_X = 11.3;
        const start_Y = 0;

        // 选择可以选择的车位
        const park = await sql.selectpark(start_X, start_Y);
        console.log("park is :", park);

        const park_x = park.park_X;
        const park_y = park.park_Y;

        // 车位状态信息改变
        await sql.updatepark(park_x, park_y, 1);

        // (12,0)->(24,27)

        const endX = park_x;
        const endY = park_y;

        console.log("endx : ", endX, " endy : ", endY);

        // 对carpark进行添加
        await sql.insertcarpark(car_number, endX, endY);

        const startX = 12;
        const startY = 0;
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





// 车辆退出，返回车牌和车费-----------------------------------
app.post('/car_exit', function (req, res) {
  try {
    console.log("time:", time);
    time = time + 1;
    console.log("car_exit start -----------------------------------------------------------");

    // 使用 upload.single 中间件，传递回调函数处理文件上传
    upload.single('car-image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('文件上传错误');
      }

      try {
        const car_number = await getCarNumberMoudl.getCarNumber();
        const selectCarparkResult = await sql.selectcarpark(car_number);

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
        }

        console.log("car_exit end --------------------------------------------------------------------");
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to recognize car number' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process car exit' });
  }
});


/// 获取车牌号，根据车牌号删除数据库内容。返回车位信息
app.post('/car_exit_Database', function (req, res) {
  try {
    console.log("time:", time);
    time = time + 1;
    console.log("car_exit_Datebase start --------------------------------------------------");

    // 使用 upload.single 中间件，传递回调函数处理文件上传
    upload.single('car-image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('文件上传错误');
      }

      try {
        const car_number = await getCarNumberMoudl.getCarNumber();
        const selectCarparkResult = await sql.selectcarpark(car_number);

        if (selectCarparkResult) {
          const park_x = selectCarparkResult.park_X;
          const park_y = selectCarparkResult.park_Y;
          const parkTime = selectCarparkResult.enterTime;
          console.log("car_exit  , park_x : ", park_x, " park_y : ", park_y, " parkTime : ", parkTime);

          console.log("car_exit_Database 操作SQl语句--------");
          await sql.deletecarpark(car_number);
          await sql.updatepark(park_x, park_y, 0);
        }

        console.log('car_exit_Database : 车位占用情况');

        // 返回车位占用情况
        const parkUsing = await sql.selectparkUsing();
        const transformparkUsing = Usingpark.getParkUsing(parkUsing);
        console.log('执行car_exit_Database');
        res.json(transformparkUsing);

        console.log("car_exit_Database end ---------------------------------------------");
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to recognize car number' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process car exit database' });
  }
});




app.post('/get_parkinglot_number', async function (req, res) {
  try {
    console.log("time:", time);
    time = time + 1;
    console.log("get_parkinglot_number start -----------------------------------------------------------");

    const parkinglot_number = await sql.selectpark_number(); // 使用 await 等待异步函数的执行完成
    console.log("/get_parkinglot_number 数目:", parkinglot_number);
    res.json({ parkinglotNumber: parkinglot_number });

    console.log("get_parkinglot_number end ------------------------------------------------------------");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '获取parkinglot_number 失败' });
  }
});


//测试方便的代码 -----------------------------------------------------------------------------------
app.post('/zero_init', async function (req, res) {
  try {
    console.log("time:", time);
    time = time + 1;
    console.log("zero_init start -----------------------------------------------------------");

    await sql.clearCarpark(); // 使用 await 等待异步函数的执行完成
    await sql.clearParkinglot();


    console.log("zero_init end ------------------------------------------------------------");
    res.status(200).json({ success: 'zero_init 成功' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'zero_init 失败' });
  }
});

app.post('/full_init', async function (req, res) {
  try {
    console.log("time:", time);
    time = time + 1;
    console.log("full_init start -----------------------------------------------------------");

    // 先进行满初始化操作，之后，随机进行删除操作
    await sql.setFullParkinglot();

    console.log("full_init end ------------------------------------------------------------");
    res.status(200).json({ success: 'full_init 成功' });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'full_init 失败' });
}
});




app.post('/random_init', async function (req, res) {
  try {
      console.log("time:", time);
      time = time + 1;
      console.log("random_init start -----------------------------------------------------------");

      // 先进行满初始化操作，之后，随机进行删除操作
      await sql.setFullParkinglot();
      await sql.randomRemoveParkinglot();

      console.log("random_init end ------------------------------------------------------------");
      res.status(200).json({ success: 'random_init 成功' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'random_init 失败' });
  }
});




//定义变量index用于识别是哪个车牌

var index = 0;

app.post('/autoEnter', async function (req, res) {
  try {
      console.log("time:", time);
      time = time + 1;
      console.log("autoEnter start -----------------------------------------------------------");

      //进行      
      index++;
      console.log("The index is : ",index);

      //将test_images中编号为 “index.jpg”的文件拷贝到images,并覆盖images下的car.jpg和修改为car.jpg

      // 构建文件路径
      const sourceFilePath = path.join(__dirname, '/public/test_images', `${index}.jpg`);
      const destinationFilePath = path.join(__dirname, '/public/images', 'car.jpg');

      // 使用 fs 复制文件并覆盖目标文件
      fs.copyFileSync(sourceFilePath, destinationFilePath);


      console.log("autoEnter end ------------------------------------------------------------");
      res.status(200).json({ success: 'autoEnter 成功' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'autoEnter 失败' });
  }
});




var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})