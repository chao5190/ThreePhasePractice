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
    let sqlstring = `SELECT * from user where user='${username}'`
    connection.query(sqlstring, (err, result) => {
        if (err) throw err
        else {
            if (result.length == 0) {
                res.send({
                    status: 1,
                    msg: '该用户名未注册'
                })
                res.end()
            } else {
                let response = result[0]
                if (response.user == username && response.password == password) {
                    res.send({
                        status: 0,
                        msg: '登录成功'
                    })
                    res.end()
                } else {
                    res.send({
                        status: 2,
                        msg: '用户名或者密码有误'
                    })
                    res.end()
                }
            }
        }
    })

});


module.exports = router;