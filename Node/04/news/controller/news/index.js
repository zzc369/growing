const newsModel = require("../../service/news/index")

module.exports = {
  async index (ctx) {
    // ctx.body = "新闻呈现的主页1111"
    // const p = ctx.query.p || 1;
    // let perPage = 5;
    // let newsData = await newsModel.getData(p,perPage);
    // let totalCount = await newsModel.getTotal();

    // let pCount = Math.ceil(totalCount/perPage)
    // await ctx.render("./news/index.pug",{
    //   newsData,
    //   pCount
    // })
    await ctx.render("./news/index.html")
  },
  async detail (ctx) {
    // ctx.body = "新闻详细页1111"
    await ctx.render("./news/detail.pug")
  }
}