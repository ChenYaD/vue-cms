// 入口文件
import Vue from 'vue';

//导入App根组件
import app from './App.vue';

//导入mui样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//按需导入mint-ui 头部组件(懒加载时必须全部导入)
// import { Header,Swipe, SwipeItem,Button} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name,Button);
//导入懒加载
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);
// import MintUI from 'mint-ui';
//全部导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);




//导入vue-resource
import VueResouce from 'vue-resource';
//安装vue-resource
Vue.use(VueResouce);
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//设置post请求方式
Vue.http.options.emulateJSON = true;

//导入格式化时间的插件
import moment from 'moment';
//定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern);
})

//导入缩略图组件,一个Vue集成PhotoSwipe的图片预览插件
import VuePreview from 'vue2-preview';
Vue.use(VuePreview);

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