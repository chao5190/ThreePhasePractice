// 尝试爬虫
//导入相关模块
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
//添加请求url和请求头
var option = {
    url: "https://www.danqu.org/meinv/",
    //不添加请求头的话可能会被拒绝访问
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'zh-CN,zh;q=0.8,zh-TW;q=0.6',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Mobile Safari/537.36',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive'
    }
};
//发送请求
request(option, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(body, {
            ignoreWhitespace: true,
            xmlMode: true
        });
        var shopLists = [];
        var shopList = $("img");
        shopList.each(function (no, shop) {
            let info = {};
            info.url = $(shop).attr("src");
            shopLists.push(info);
        });
        console.log(shopLists);
        let json = JSON.stringify(shopLists)
        //把数据写入其他文件
        fs.writeFile('8.json', json, (err, data) => {
            if (err) throw err;
            console.log("写入成功");
        })
    }
});