const Koa = require("koa")

const Router = require("koa-router")
let app = new Koa()
let router = new Router()
router.get("/",(ctx, next)=>{
  ctx.body = "nihao"
})

app.use(router.routes())
app.listen(3000)