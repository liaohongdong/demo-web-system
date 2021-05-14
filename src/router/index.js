/*
 * @Author: hongdong.liao
 * @Date: 2021-01-08 09:54:38
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 18:20:55
 * @FilePath: /microDemo/demo-web/demo-web-system/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 此处配置子应用自身的详情页面
 * 其他列表页面根据views中文件路径动态加载
 */
const routes = [
  {
    path: '/menus',
    name: '菜单管理',
    component: () =>
      import(
        /* webpackChunkName: "menus" */ '@/views/menus.vue'
      )
  },
  {
    path: '/roles',
    name: '角色管理',
    component: () =>
      import(
        /* webpackChunkName: "roles" */ '@/views/roles.vue'
      )
  },
  {
    path: '/users',
    name: '用户管理',
    component: () =>
      import(
        /* webpackChunkName: "users" */ '@/views/users.vue'
      )
  }
]

export default routes
