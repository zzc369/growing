// const Router = require("koa-router")
// let router = new Router()
// let router = new Router({
//   prefix:"/news"
// })

// app.use(router.routes())
const newRouter = require("./routers/newsRouter")
const adminRouter = require("./routers/adminRouter")
module.exports = function (app) {
  
  app.use(newRouter.routes())
  app.use(adminRouter.routes())
}