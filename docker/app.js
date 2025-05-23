const express = require('express');
const http = require('http');
var app = express();
const server = http.createServer(app).listen(80);

const path = require('path');


const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql-service'
    , port: 3306
    , user: 'root'
    , password: '0000'
    , database: 'linux'
});

app.get('/', function (req, res) {
  res.sendFile("postListPage.html", { root: __dirname });
});

app.get('/getPostList', function (req, res) {
  let result = "";
  let selectQuery = `SELECT * FROM post`;
  connection.query(selectQuery,
      function(err, rows, fields) {
          if (err) throw err;
          res.send(rows);
      }
  )
});

console.log("Server is run")