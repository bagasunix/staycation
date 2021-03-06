require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const ejsLayouts = require('express-ejs-layouts');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    })
    .then(() => console.log("Database Connection Successful!"));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bagasunix', express.static(path.join(__dirname, 'node_modules/admin-lte')))
app.set('layout', './index') // specify the views directory
app.set('view engine', 'ejs') // register the template engine
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.use(ejsLayouts);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
