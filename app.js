var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerouter = require('./routes/register');
var homeUser = require('./routes/homeUser');
var homeAdmin = require('./routes/homeAdmin');
var addVoucher = require('./routes/addVoucher');
var updateVoucher = require('./routes/updateVoucher');
var qlyVcherAdmin = require('./routes/qlyVcher');
var profileUser = require('./routes/profileUser');

var addkhachhangrouter = require('./routes/addkhachhang');
var updatekhachhangrouter = require('./routes/updatekhachhang');
var khachhangrouter = require('./routes/khachhang');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerouter);
app.use('/homeUser', homeUser);
app.use('/homeAdmin', homeAdmin);
app.use('/addVoucher', addVoucher);
app.use('/updateVoucher', updateVoucher);
app.use('/qlyVcher', qlyVcherAdmin);
app.use('/profileUser', profileUser);

app.use('/addkhachhang', addkhachhangrouter);
app.use('/updatekhachhang', updatekhachhangrouter);
app.use('/khachhang', khachhangrouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});