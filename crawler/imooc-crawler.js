var http = require('http')
// var url = 'http://www.imooc.com/learn/348'    这个课程已经下架了
var url = 'http://www.imooc.com/learn/857'

http.get(url,(res)=>{
    var html = ''

    res.on('data',(data)=>{
        html += data
    })

    res.on('end',()=>{
        console.log(html);
    }).on('error',()=>{
        console.log('获取课程数据出错');
    })
})