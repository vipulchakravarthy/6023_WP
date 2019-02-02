var express = require('express');
var catalogController = require('./controllers/catalogController');
var app = express();

app.set('view engine', 'ejs');


app.use(express.static('./public'));
catalogController(app);

app.listen(4200);
console.log("you are listening to port 4200");