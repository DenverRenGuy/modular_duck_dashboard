
//Modules required

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//Create the general app
var app = express();

//App settings
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//Database Connections
require('./server/config/mongoose.js');
// mongoose.Promise = global.Promise;


//Routes
var routes_setter = require('./server/config/routes.js');
//INVOKE
routes_setter(app);

//Initiate the server listening
app.listen(8000, function(){
    console.log('Listening on Port 8000');
})
