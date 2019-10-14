var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//读取相关路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json()); //把数据转化为json数据
app.use(express.urlencoded({
  extended: false
})); //避免出现中文乱码或其他编码乱码
app.use(cookieParser());
//读取相关静态资源
app.use(express.static(path.join(__dirname, 'public')));
// 根据相关路由读取相关路由模块
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;