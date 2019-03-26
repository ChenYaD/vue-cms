// 入口文件
import Vue from 'vue';

//导入App根组件
import app from './App.vue';

//导入mui样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//按需导入mint-ui 头部组件
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入vue-resource
import VueResouce from 'vue-resource';
//安装vue-resource
Vue.use(VueResouce);


//导入路由的包
import VueRouter from 'vue-router';
//安装路由
Vue.use(VueRouter);
//导入自己的router.js模块
import router from './router.js';


var vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    render: c=>c(app),
    router  //挂载路由对象到vm实例上
});