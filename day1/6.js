// 练习第三方模块的安装及使用
const iohook = require('iohook');
iohook.on('mousemove', event => {
    console.log(event);

});
// 启动iohook
// iohook.start();