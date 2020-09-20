## 组件和模块的区别是什么
- 
- 表达式是什么 和语句的区别
  - 可以通过运算或者执行 得到结果(数据)的公式。变量，函数，数学运算
- 双向绑定
- Object.defineProperty



- 01
  - 在html中，单标签组件重复会被省略????。。。。例子见01/el/html
  - : == v-bind  
  - @ == v-on

- 02 
  - defineProperty 新增不会触发？存在的一些问题
  - v-if 和 v-show
  - v-if  渲染和不渲染标签,不常 变化可使用
  - v-show 为display none,适合经常切换
  - 标签嵌套,浏览器会处理非法嵌套,标签嵌套要符合规范

  - attribute和property
  写在标签上的属性，attribute,input.setAttribute设置的也是attr
  dom的属性叫prop如input.value
- 03
  - clientX clientY 点击位置距离当前body的可视区域的x，y坐标
  - offsetX offsetY 相对于带有定位的父盒子的x，y坐标
  - screenX screenY 点击位置相对于电脑屏幕的xy坐标
- 04 
  - 为什么组件的data是函数，而app的vue实例中的data却是一个对象？
  - 组件中属性的命名不能以_开头
  - .native 修饰符原生事件
  - v-modal 原理  与  .sync 
  - slot 和 具名插槽  作用域插槽
  - prop 验证,非prop特性
  - 生命周期
  - refs

- 05
  - 脚手架 vue-cli
  - scoped css通过给组件加上一个类似哈希的属性，来唯一标示，达到样式私有化
  - 生命周期，创建，挂载，更新，卸载
    - beforeCreate，代表当前组件被new出来，但是数据初始化工作全都没完成，所以无法访问数据，一般做跟组件无关的操作，用的比较少
    - create ，在实例创建完成之后立即被调用，该阶段完成了对data数据的observer，可以处理一些异步任务，请求数据，
    - beforeMount 在挂载之前被调用，用的少，这里的this.$el是undefined
    - mount 这里就可以访问到this.$el了，可以通过DOM操作来对组件内部元素进行处理了
    - 父组件最先开始挂载，但是是最内层的子组件最先挂载完成。洋葱模型
    - <component :is="组件名称">，动态组件，:is内部有点类似v-if，会销毁组件，所以无法很好的保存状态，可以在这个组件外包一层keep-alive，组件会在
      冻结和激活之间切换
    - 可以像vue.prototype.http = http这样，在vue的实例上挂载http方法，之后就可以通过this.http调用
      也可以使用Vue.use(object || function),接受对象时，对象中必须要有install的方法
    - 动画，transtion，和v-if，v-show，动态组件等绑定

- 06
  - vue router,vue.use(VueRouter),扩展Vue路由
  - router-view 当前访问的url如果满足了其中的一个路由组件关联配置，那么该组件就会显示到对应的router-view中
  - 路由内组件守卫，类似生命周期，beforeRouterEnter(当路由解析完成时，命中指定的组件渲染之前（组件beforeCreate之前）不能调用this，想要使用this，需要通过next来进行调用next(()=>{这里使用})，可以获取当前用户有无权限),,beforeRouterUpdate(to.from,next)，在当前路由改变，但是组件被复用时调用，beforeRouterLeave，导航离开组件时调用，可以用来代替watch('$route'),一定要确保调用next函数，才能进行接下来的过程，
  - next(),next(false),next('/')
  - 路由独享守卫，在routes中配置
  - 全局守卫，注册在router中
  - 嵌套路由
  - 重定向

- 07
  - 导航之前获取数据，获取数据之后再通过路由进入页面，可以通过beforeRouterEnter来实现，在beforeRouterEnter里面先获取数据，再next，
  - nProgress 进度条
  - 路由动效，就是用transition组件包裹router-view
  - 滚动行为，a页面滑动到页面中间，，跳转到b页面，到了b页面，滚动条也是在中间的，和a页面滚动条的位置一样，前端路由并没有重载整个浏览器，只是通过DOM局部更新了，所以有时候滚动条的状态会被保持，在new Router里面有一个scrollBehavior函数，返回值是x，y，可以将y设置为0，但是点浏览器返回时，也会使y变成0，所以在scrollBehavior(to,from,savedPosition),在使用浏览器的回退，go，back时，savedPosition会记录上一个页面的x，y值，所以可以进行判断，if，savedPosition有值，原封不动return就好了
  - 路由元信息，通过meta定义要验证的路由
  - 路由懒加载，在routes里面，直接component:About(组件),这样属于静态加载，在打包的时候会一次性全部打包进去，可以使用component: () => import(),按需加载，这样打包就会分成很多个包，每个的体积也很小，如果想一个路由以及其子路由打成一个包，可以写成import(/* webpackChunkName: "user"*/),以注释的形式写，但是是有用的，user是子路由的父路由的name，
  - vuex
  