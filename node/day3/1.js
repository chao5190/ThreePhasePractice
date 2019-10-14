var mysql = require('mysql');
var config = require('./config')
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: "root",
    database: "node",
});

let sql = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            // 可以去掉连接和关闭
            connection.query(`SELECT * from user where user='${username}'`, function (error, results, fields) {
                if (error) {
                    throw error;
                    reject(error);
                } else {
                    console.log(result.length);
                    console.log(result);
                }
                // 释放连接
                connection.release();
            });
        })
    })

}