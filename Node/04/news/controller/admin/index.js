
let adminModel = require("../../service/admin/index")
module.exports = {
  async index (ctx) {
    // 后端管理的主页
    // ctx.body = "admin呈现的主页1111"
    await ctx.render("./admin/admin.pug")
  },
  async addNews(ctx) {
    // 后端管理的addNews
    // ctx.body = "admin呈现的addNews"
    await ctx.render("./admin/addNews.pug")
  },
  async newsList(ctx){
    // 后端管理的newsList
    // ctx.body = "admin呈现newsList"
    await ctx.render("./admin/newsList.pug")
  },
  async addData (ctx) {
    // 使用了koa-body 就可以在ctx.request.body获取请求的数据
    console.log(ctx.request.body)
    let res = await adminModel.addData(ctx.request)
    let info = {}
    if( res.affectedRows>0) {
      info = {
        info: "操作成功",
        status: 1
      }
    } else {
        info = {
        info: "操作失败",
        status: 0
      }
    }
    ctx.body = info
  }
}