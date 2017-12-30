
var express = require('express');
var app = express();  //https://expressjs.com/en/4x/api.html

app.use(express.static(__dirname + '/public'));  //static content that can be sent to client located in the public directory


// app.get('/hello', function (req, res) { //request from the client, '/hello' is called routes
//     //console.log('hello world');
//     res.send({message: 'hello world from the server'});
// });

// to load app.js on the server side
var myApp = require('./lectures/afternoon/app'); // the value of myApp comes from module.exports from server-side app.js
// console.log(myApp);
// myApp.sayHello();

myApp(app);

app.listen(3000);

// var express = require('express');
// var app = express();
//
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // configure a public directory to host static content
// app.use(express.static(__dirname + '/public'));
//
// require ("./test/app.js")(app);
//
// var port = process.env.PORT || 3000;
//
// app.listen(port);