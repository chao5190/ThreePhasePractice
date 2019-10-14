const http = require('http')
http.createServer((request, response) => {
    //允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader('name', 'chao')
    response.write(JSON.stringify({
        name: 'jack',
        age: 18
    }))
    response.end()
}).listen(4321)
console.log('启动服务器');