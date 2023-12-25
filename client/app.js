const express = require('serverless-express/express');
const errorController = require('./controllers/errorController');
const plstRoute = require('./routes/plstRoute')

var app = express();

app.use(express.json());

app.use('/plst', plstRoute)

app.use(errorController);

module.exports = app;
