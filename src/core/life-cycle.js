/*
 * @Author: hongdong.liao
 * @Date: 2021-01-08 10:05:29
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 18:31:10
 * @FilePath: /microDemo/demo-web/demo-web-system/src/core/life-cycle.js
 */
/* eslint-disable */
import Vue from 'vue';
import App from "@/App.vue";
import store from "@/store";
import selfRoutes from "@/router/index";

import messages from '@/lang'; // Internationalization

import { renderSubchild, } from "@fe-micro/micro-core";
import { routeMatch, } from "@fe-micro/micro-router";
// 导入官方通信方法
import appStore from "@/utils/app-store";

const __qiankun__ = window.__POWERED_BY_QIANKUN__;
let instance = null;
let parentStore = null;

const lifeCycle = () => {
    return {
        async bootstrap() {
        },
        async mount(props) {
          console.log('system')
            props.parentStore.dispatch('appstore/setAppName', 'system');
            appStore(props);
            parentStore = props.parentStore;
            render(props);
        },
        async unmount() {
            const cachedInstance = instance.cachedInstance || instance;
            window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__ = cachedInstance;
            const cachedNode = cachedInstance._vnode;
            if (!cachedNode.data.keepAlive) cachedNode.data.keepAlive = true;
            cachedInstance.catchRoute = {
                apps: [...instance.$router.apps]
            };
            if (instance.cachedInstance || instance) {
                instance.$destroy();
                instance = null;
            }
        },
    };
};

const render = ({ routes, routerBase, container, i18n }) => {
    const macthRoutes = routeMatch(routes, routerBase);
    const fullMacth = [...macthRoutes, ...selfRoutes]
    const fullSelf = [...selfRoutes];
    const routeBase =  __qiankun__ ? routerBase : '/';
    const __routes = __qiankun__ ? fullMacth : fullSelf;
    Object.keys(messages).forEach(key => {
        i18n && i18n.mergeLocaleMessage(key, messages[key]);
    });
    const { originInstance, } = renderSubchild({
        routes: __routes,
        routerBase: routeBase,
        store,
        parentStore,
        container,
        i18n,
        subappKey: '#app-system',
        mountPoint: App,
    });
    instance = originInstance;
};
export { lifeCycle, render };
