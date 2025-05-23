const express = require('express');
const http = require('http');
var app = express();
const server = http.createServer(app).listen(80);

app.get('/', function (req, res) {
  res.sendfile("postListPage.html");
});
