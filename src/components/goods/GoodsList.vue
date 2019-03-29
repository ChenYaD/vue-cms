<template>
    <div class="goods-list">
        <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' +item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link> -->

        <!--在网页中有两种跳转方式除了
        使用 <router-link> 创建 a 标签来定义导航链接
        window.location.href  这种叫做编程式导航
        我们还可以借助 router 的实例方法，通过编写代码来实现-->
         <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

    </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
    //data是往自己组件内部挂载私有数据
    data(){
        return {
            pageindex: 1,  //分页的页数
            goodslist:[]  //存放商品列表的数组
        }
    },
    created(){
        this.getGoodsList();
    },
    methods: {
        //获取商品列表
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex=' +this.pageindex).then(result =>{
                if(result.body.status ===0){
                    //concat() 方法用于连接两个或多个数组。 该方法不会改变现有的数组,而仅仅会返回被连接数组的一个副本。
                    //加载更多时第一页的数据不能丢失
                    this.goodslist = this.goodslist.concat(result.body.message);
                }else{
                    Toast('加载数据失败');
                }
            });
        },
        //商品列表加载更多
        getMore(){
            this.pageindex ++;
            this.getGoodsList();
            
        },

        //商品详情页面
        goDetail(id){
            //使用js的形式进行路由导航
            //区分：this.$route是路由｛参数对象｝，所有路由中的参数，params,query都属于他
            //this.$router是路由一个｛导航对象｝，可以实现路由的前进，后退，跳转到新的url

            // 字符串
           this.$router.push('/home/goodsinfo/' +id);

            // 对象
            //this.$router.push({ path: '/home/goodsinfo/' +id })

            // 命名的路由
           // this.$router.push({ name: 'goodsinfo', params: { id }})
        }
    }
    
    
}
</script>
<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 305px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                  
                .now{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
                .old{
                    font-size: 12px;
                    margin-left: 10px;
                   text-decoration: line-through
                }
            }
            .sell{
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>

