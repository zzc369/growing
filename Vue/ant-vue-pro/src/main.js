import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 这是全部引入antd的方式
// import antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.less'

// 这是引入部分组件的方式
// import  Button  from 'ant-design-vue/lib/button'
// import 'ant-design-vue/lib/button/style/index'

// 添加了babel之后的引入方式
import { Button, Layout,Icon,Drawer,Radio,Menu } from 'ant-design-vue';

Vue.config.productionTip = false;
// Vue.use(antd)
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
