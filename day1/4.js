const fs = require('fs'); //导入内置fs文件系统模块

function readFile() { //读取文件的函数
    return new Promise((resolve, reject) => {
        fs.readFile('3.js', (err, data) => {
            if (err) throw err;
            let string = data.toString();
            resolve(string);
        });
    })
}

function writeFile(string) { //写入文件的函数
    return new Promise((resolve, reject) => {
        output = string.replace(/console.log\(.+\)/g, "").replace(/\/\/.+/g, ""); //把读取出来的字符串删除注释和console后重新写入
        fs.writeFile('5.js', output, (err, data) => {
            if (err) throw err;
            console.log("写入成功");
        })
    })
}

// readFile().then(writeFile)    逐步执行异步函数
// 用自执行函数逐步执行异步函数，保证读取后再写入
;
(async () => {
    let output = await readFile();
    writeFile(output);
})()