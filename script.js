var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
});

connection.connect(function (error) {
    if(!!error) {
        console.log('Error');
    }else {
        console.log('Connected');
    }
});

app.get('/', function (req, resp) {
    connection.query("SELECT * FROM mySampleTable", function(error, rows, field) {
        if(!!error) {
            console.log('Error in the query');
        }else {
            console.log('Successful query');
            console.log(rows);
        }
    });
});
app.listen(1337);



