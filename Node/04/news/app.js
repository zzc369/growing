// 主入口， 单入口
// MVC model模型层 view视图层 controller控制层
const Koa = require("koa")
const views = require("koa-views")
const static = require("koa-static")
const koaBody = require("koa-body")
let app = new Koa()
const router = require("./router")
app.use(views(__dirname+"/views",{
  extension:"pug"
}))
app.use(static(__dirname+"/static"))
app.use(koaBody({
  multipart:true  //允许上传文件
}))
router(app)
app.listen(4000)