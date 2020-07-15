在总文件夹中，应该有一个app.js的入口
(app.js关联着router，通过router，用户才能通过url来访问项目，其中还有其他的比如渲染模板引擎，静态文件等关联到app中)
一个router的总路由，关联着router文件夹分路由，路由文件夹中包括各个子路由，比如项目中的导航按钮，router总路由可以通过require将其导入。
views文件夹包括前端界面的编写
static文件夹包括静态文件，如css，img
service 即model模型层，数据交互
Controller 连接views和router，Controller的主要作用就是控制和连接，将view界面的渲染封装到一个方法里面，router.get可以回调这个函数，从而实现用户输入url，内容呈现
url -》 router.get('/',ctx=>{}) => ctx调用Controller中的方法 =》 Controller中的方法render views中的界面


错误日记
1. UnhandledPromiseRejectionWarning: Error: ENOENT: no such 
file or directory, stat 'D:\study\kkb\Node\04\newsviews\news\detail.pug'
文件夹路径错误,app.js中，app.use(views(__dirname+"/views",{
  extension:"pug"
}))，__dirname+"/views"，文件夹名称前加 /
2. UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().当 Promise 的状态变为 rejection 时，我们没有正确处理，让其一直冒泡（propagation），直至被进程捕获。这个 Promise 就被称为 unhandled promise rejection。

Node\04\news\controller\news\index.js中，render是一个异步函数，需要async和await,不加await，控制台不会报错，但是界面会404