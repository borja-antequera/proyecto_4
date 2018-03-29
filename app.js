var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');

var indexRouter = require('./routes/routes');
var passport = require('passport');




var hbs = require('hbs');
var hbsUtils = require('hbs-utils')(hbs);

var app = express();

app.use('/components', express.static(`${__dirname}/public/components/`))

app.use(cookieParser());
app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : false
}));
app.use(flash());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);


//partials
hbs.registerPartials(`${__dirname}/views/partials/`);

//hbsUtils
hbsUtils.registerPartials(`${__dirname}/views/partials/`);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials/`);

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
