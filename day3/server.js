var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "node"
});
pool.getConnection(function (err, connection) {
    if (err) throw err;
    connection.query("SELECT * from user", function (error, res, fields) {
        user = res[0].user


        connection.release();
        if (error) throw error;
    })
})
console.log(user);

// pool.getConnection(function (err, connection) {
//     if (err) throw err;
//     connection.query(`SELECT * from user where user='qwe' and password='asd'`, function (error, res, fields) {
//         console.log(res);
//         console.log("----");
//         console.log(res.fieldCount);

//         connection.release();
//         if (error) throw error;
//     })
// })