const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
// 模拟数据，api服务
let appData = require('./data.json');
let seller = appData.seller;
let goods = appData.goods;
let ratings = appData.ratings;
// api接口
let apiRoutes = express.Router();
apiRoutes.get('/seller', function(req, res) {
  res.json({
    errno: 0,
    data: seller
  });
});

apiRoutes.get('/goods', function(req, res) {
  res.json({
    errno: 0,
    data: goods
  });
});

apiRoutes.get('/ratings', function(req, res) {
  res.json({
    errno: 0,
    data: ratings
  });
});
app.use('/api', apiRoutes);
app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', function(req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
  res.send(html);
});
app.listen(8082);
