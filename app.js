var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apuntesRouter = require('./routes/apuntes');
var inventarioRouter = require('./routes/inventario');
var nivelRouter = require('./routes/nivel');
var opcionRouter = require('./routes/opcion');
var preguntaRouter = require('./routes/pregunta');
var sesiontriviaRouter = require('./routes/sesiontrivia');
var transaccionRouter = require('./routes/transaccion');
var trivia_preguntaRouter = require('./routes/trivia_pregunta');
var triviaRouter = require('./routes/trivia');
var usuarioRouter = require('./routes/usuario');

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
app.use('/apuntes', apuntesRouter);
app.use('/inventario', inventarioRouter);
app.use('/nivel', nivelRouter);
app.use('/opcion', opcionRouter);
app.use('/pregunta', preguntaRouter);
app.use('/sesiontrivia', sesiontriviaRouter);
app.use('/transaccion', transaccionRouter);
app.use('/trivia_pregunta', trivia_preguntaRouter);
app.use('/trivia', triviaRouter);
app.use('/usuario', usuarioRouter);

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
