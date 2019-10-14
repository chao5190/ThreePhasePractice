var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require("./db");
var connection = mysql.createConnection(db.mysql);
connection.connect();


/* GET users listing. */
router.post('/', function (req, res, next) {
    let {
        username,
        password
    } = req.body;
    let sqlstring = `INSERT INTO user VALUES (NULL, '${username}','${password}')`;
    let sqlstring2 = `SELECT * from user where user='${username}'`;
    connection.query(sqlstring2, (err, result) => {
        if (err) throw err
        else {
            if (result.length != 0) {
                res.send({
                    status: 1,
                    msg: '该用户名以被注册'
                })
                res.end()
            }
        }
    })
    connection.query(sqlstring, (err, result) => {
        if (err) throw err
        else {
            if (result.length != 0) {
                res.send({
                    status: 0,
                    msg: '该用户名注册成功'
                })
                res.end()
            }
        }
    })

});


module.exports = router;