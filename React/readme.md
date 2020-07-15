01
  - 虚拟DOM，
    ReactDOM 提供了与浏览器交互的 DOM 功能，如：dom 渲染
    - ReactDOM.render(element, container[, callback])
        - element：要渲染的内容
        - container：要渲染的内容存放容器
        - callback：渲染后的回调函数 ,创建虚拟DOM，类型对象
  - jsx:js+xml 语法糖，如果想直接使用jsx，需要使用babel编译才能使用，并且将script type="type/babel"
    - jsx中不能输出对象，可以输出数组，但是会被拼接
    - 灵活使用?:  && 等运算符
    - jsx不能使用循环语句，但是可以通过数组+map来，如果想使用对象里面的数据，可以用Object.keys()+map
    - 列表渲染：在使用map时需要加上key，如果这个数组中的数据会被操作，一定记得key 值不要用索引 ，最好用唯一标识的数据的id
    - 必需要顶层元素，
    - 