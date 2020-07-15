const Koa = require("koa")
const app = new Koa()
app.use((ctx,next)=>{
  ctx.body = "nihaoo"
})
app.listen(3000)