var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "node"
});
/* GET users listing. */
router.post('/', function (req, res, next) {
    let {
        username,
        password
    } = req.body;
    SelectUser
    // if (username == "qwe" && password == "asd") {
    //     res.json({
    //         status: 1,
    //         msg: "登录成功"
    //     });
    // } else {
    //     res.json({
    //         status: 0,
    //         msg: "登录失败"
    //     })
    // }

});

function SelectUser(username, password) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(`SELECT username,password from user where user=${username} and password=${password}`, function (error, res, fields) {

            user = res[0].user;
            password = res[0].password;
            connection.release();
            if (error) throw error;
        })
    })
}

module.exports = router;