var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require("./db");
var sql = require("./sql");
var connection = mysql.createConnection(db.mysql);
connection.connect();


/* GET users listing. */
router.post('/', function (req, res, next) {
        let {
            username,
            password
        } = req.body;
        let sqlstring = `SELECT * from user where user='${username}'`
        sql.getuser(sqlstring, username, password);
    }


);


module.exports = router;