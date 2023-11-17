var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const userRoutes = require('./users');
const app = express();


app.use('/users', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/address', function(req, res, next) {
  res.render('address', { title: 'Express' });
});
router.get('/paymentt', function(req, res, next) {
  res.render('paymentt', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
});
router.get('/shop2', function(req, res, next) {
  res.render('shop_2', { title: 'Express' });
});
router.get('/shop3', function(req, res, next) {
  res.render('shop_3', { title: 'Express' });
});
router.get('/shop4', function(req, res, next) {
  res.render('shop_4', { title: 'Express' });
});

module.exports = router;
