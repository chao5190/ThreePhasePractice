var request = require('request');
const {
    insert
} = require('./CURD/curd')
request('https://news.qq.com/ext2020/apub/json/prevent.new.json', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log(JSON.parse(body)); // Print the HTML for the Google homepage.
    const news = JSON.parse(body);
    console.log(news);
    news.forEach(element => {
        // console.log(element.title)
        // console.log(element.abstract)
        // console.log(element.image_list)
        let src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571031741754&di=efe5625bb5c7c18a8ead664ea7d62e86&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F365969258.jpeg";
        insert('news', [{
            title: element.title,
            // abstract: element.abstract,
            image: src
        }])
    });
});