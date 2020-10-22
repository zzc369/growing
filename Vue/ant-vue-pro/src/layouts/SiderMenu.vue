<template>
  <div style="width: 256px">
    <a-menu
      :selected-keys="selectedKeys"
      :open-keys="openKeys"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in menuData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.meta.icon" type="pie-chart" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
// recommend use functional component

// import { Menu } from 'ant-design-vue';
// const SubMenu = {
//   template: `
//       <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
//         <span slot="title">
//           <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
//         </span>
//         <template v-for="item in menuInfo.children">
//           <a-menu-item v-if="!item.children" :key="item.key">
//             <a-icon type="pie-chart" />
//             <span>{{ item.title }}</span>
//           </a-menu-item>
//           <sub-menu v-else :key="item.key" :menu-info="item" />
//         </template>
//       </a-sub-menu>
//     `,
//   name: 'SubMenu',
//   // must add isSubMenu: true
//   isSubMenu: true,
//   props: {
//     ...Menu.SubMenu.props,
//     // Cannot overlap with properties within Menu.SubMenu.props
//     menuInfo: {
//       type: Object,
//       default: () => ({}),
//     },
//   },
// };
import SubMenu from './SubMenu.vue'
export default {
  props: {
    theme: {
      type: String,
      default: "dark"
    }
  },
  components: {
    'sub-menu': SubMenu,
  },
  data () {
    this.selectedKeysMap = {};
    this.openKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      menuData,
      selectedKeys: [],
      openKeys: [],
    };
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed;
    },
    getMenuData (routes, parentKeys = [], selectedKeys) {
      const menuData = [];
      routes.forEach(item => {
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildrenIsMune) {
            newItem.children = this.getMenuData(item.children)
          }
          menuData.push(newItem)
        } else if (
          !item.hideInMenu && !item.hideChildrenIsMune && item.children
        ) {
          menuData.push(...this.getMenuData(item.children))
        }
      });
      return menuData
    },

  },
};
</script>
