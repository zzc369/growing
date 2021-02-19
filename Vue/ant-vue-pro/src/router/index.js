import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import findLast from "lodash/findLast";
import {check,isLogin } from '@/utils/auth'
// import RenderRouterView from '@/components/RenderRouterView'

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    hideInMenu: true,
    // component: RenderRouterView,
    // component: {
    //  render: h => h('router-view')
    // },
    component: () =>
      import(/* webpackChunkName: 'layout' */ "../layouts/UserLayout.vue"),
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: 'user' */ "@/views/User/Login.vue"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: 'user' */ "@/views/User/Register.vue"),
      },
    ],
  },
  {
    path: "/",
    meta: {
      authority: ["user", "admin"],
    },
    component: () =>
      import(/* webpackChunkName: 'layout' */ "@/layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/dashboard/analysis",
      },
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          icon: "dashboard",
          title: "仪表盘盘",
        },
        component: {
          render: (h) => h("router-view"),
        },
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            meta: {
              title: "分析页面",
            },
            component: () =>
              import(
                /* webpackChunkName: 'dashboard' */
                "@/views/Dashboard/Analusis.vue"
              ),
          },
        ],
      },
      {
        path: "/form",
        name: "form",
        component: {
          render: (h) => h("router-view"),
        },
        meta: {
          icon: "form",
          title: "表单",
          authority: ["admin"],
        },
        children: [
          {
            path: "/form/basic-form",
            name: "basicform",
            meta: { title: "基础表单" },
            component: () =>
              import(
                /* webpackChunkName: 'form' */ "@/views/Forms/BasicForm.vue"
              ),
          },
          {
            path: "/form/step-form",
            name: "stepform",
            hideChildrenIsMune: true,
            meta: { title: "分布表单" },
            component: () =>
              import(
                /* webpackChunkName: 'form' */ "@/views/Forms/StepForm.vue"
              ),
            children: [
              {
                path: "/form/step-form",
                redirect: "/form/step-form/info",
              },
              {
                path: "/form/step-form/info",
                name: "info",
                component: () =>
                  import(
                    /* webpackChunkName: 'form' */
                    "@/views/Forms/StepForm/Step1.vue"
                  ),
              },
              {
                path: "/form/step-form/confirm",
                name: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: 'form' */
                    "@/views/Forms/StepForm/Step2.vue"
                  ),
              },
              {
                path: "/form/step-form/result",
                name: "result",
                component: () =>
                  import(
                    /* webpackChunkName: 'form' */
                    "@/views/Forms/StepForm/Step3.vue"
                  ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    name: "404",
    hideInMenu: true,
    component: () => import("@/404.vue"),
  },
  {
    path: "/403",
    name: "403",
    hideInMenu: true,
    component: () => import("@/404.vue"),
  },
];
// 18770
// 18217723381
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  const record = findLast(to.matched, (record) => {
    record.meta.authority;
  });
  if (record && check(record.meta.authority)) {
    if(!isLogin() && to.path !== '/user/login') {
      next({
        path: '/user/login'
      })
    } else if(to.path !== '403') {
      next({
        path: '/403'
      })
    }
    NProgress.done()
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
