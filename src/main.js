// 入口文件
import Vue from 'vue';

//导入App根组件
import app from './App.vue';
import './lib/mui/css/mui.min.css';


//按需导入mint-ui 头部组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue({
    el: '#app',
    data: {

    },
    methods: {

    },
    render: c=>c(app),
});