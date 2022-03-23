require('dotenv').config;
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const apiRoutes = require('./routes');
require('./models');
const app = express();
const PORT = 4000;
// not getting port number using process.env.POST
const startServer = async () => {
  const sequelize = new Sequelize(
    'postgres://postgres:admin@localhost:5432/moviesapp'
  );
  await sequelize.authenticate();
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.send('<h1> Homepage</h1>');
  });

  app.use('/api', apiRoutes);

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(PORT, () => {
    console.log('server started at port 4000');
  });
};

try {
  startServer();
} catch (error) {
  console.log('failed to start the server', error);
}
