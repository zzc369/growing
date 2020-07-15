模块化
AMD sea.js  CMD require
module.exports 和 exports
module.exports ={},实际上就是为module的exports属性添加方法或属性
exports其实是module.exports的引用
var module = new Module();
var exports = module.exports;

npm

查找3000端口被谁占用了
lsof -i:3000
kill XXX

内置模块url url.parse()

模板引擎