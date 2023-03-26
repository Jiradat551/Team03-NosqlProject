var express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const cors  =require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var database = require('./configs/database')
global.__basedir = __dirname

// MONGOOSE //
mongoose.Promise = global.Promise
mongoose.set('strictQuery', false)
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected')
}, error =>{
    console.log('Cannot connect to database ' + error)
})
// END MONGOOSE //


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',require('./routes/students'))
app.use('/achive',require('./routes/achive'))
app.use('/team',require('./routes/team'))
app.use('/Account',require('./routes/Account'))
app.use('/TasknPoint',require('./routes/TasknPoint'))
module.exports = app;
