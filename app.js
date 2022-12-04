const express = require('express');

const app = express();
app.use(express.json());

const AppError = require('./dev-data/utils/appError');
const globalErrorHandler = require('./dev-data/controllers/errorController');
const tourRouter = require('./dev-data/routers/tourRouter');
const userRouter = require('./dev-data/routers/userRouter');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
