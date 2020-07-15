const Router = require("koa-router")
const newsController = require("../controller/news/index")
let router = new Router({
  prefix:"/news"
})
router.get("/",ctx => {
  ctx.redirect('/news/index')
})

router.get("/index",newsController.index)
router.get("/detail",newsController.detail)

module.exports = router