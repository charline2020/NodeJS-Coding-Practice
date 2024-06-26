var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/web/index');
const authRouter = require('./routes/web/auth');

const accountRouter = require('./routes/api/account');
const authApiRouter = require('./routes/api/auth');

const session = require('express-session');
const mongostore = require('connect-mongo');

const {DBHOST, DBPORT, DBNAME} = require('./config/config');

var app = express();

app.use(session({
  name: 'sid',
  secret: 'hachi',
  saveUninitialized: false,
  resave: true,
  store: mongostore.create({
      mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`
  }),
  cookie:{
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
  },
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// website page
app.use('/', indexRouter);
app.use('/api', accountRouter);

app.use('/', authRouter);
app.use('/api', authApiRouter);

// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  res.render('404');
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
