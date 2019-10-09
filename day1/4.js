const fs = require('fs');

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('3.js', (err, data) => {
            if (err) throw err;
            let string = data.toString();
            resolve(string);
        });
    })
}

function writeFile(string) {
    return new Promise((resolve, reject) => {
        output = string.replace(/console.log\(.+\)/g, "").replace(/\/\/.+/g, "");
        fs.writeFile('5.js', output, (err, data) => {
            if (err) throw err;
            console.log("写入成功");
        })
    })
}

// readFile().then(writeFile)
;
(async () => {
    let output = await readFile();
    writeFile(output);
})()