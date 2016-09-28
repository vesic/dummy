'use strict'

var express = require('express');
var app = express();

let port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
//   res.send('Hello World!');
    res.sendfile(__dirname + 'index.html');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});