## 组件和模块的区别是什么
- 
- 表达式是什么 和语句的区别
  - 可以通过运算或者执行 得到结果(数据)的公式。变量，函数，数学运算
- 双向绑定
- Object.defineProperty



- 01
  - 在html中，单标签组件重复会被省略????。。。。例子见01/el/html

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