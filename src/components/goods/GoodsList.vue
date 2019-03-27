<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="//img13.360buyimg.com/n1/s450x450_jfs/t21187/311/512009857/191915/b4b7659f/5b0fc413Nab38df84.jpg" alt="">
            <h1 class="title">小米8SE 全面屏智能手机 4GB+64GB 蓝色 全网通4G 双卡双待</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1549.00</span>
                    <span class="old">￥1749.00</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩10件</span>
                </p>
            </div>

        </div>

         <div class="goods-item">
            <img src="//img13.360buyimg.com/n1/s450x450_jfs/t21187/311/512009857/191915/b4b7659f/5b0fc413Nab38df84.jpg" alt="">
            <h1 class="title">小米8SE 全面屏智能手机 4GB+64GB 蓝色 全网通4G 双卡双待</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1549.00</span>
                    <span class="old">￥1749.00</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩10件</span>
                </p>
            </div>

        </div>

         <div class="goods-item">
            <img src="//img13.360buyimg.com/n1/s450x450_jfs/t21187/311/512009857/191915/b4b7659f/5b0fc413Nab38df84.jpg" alt="">
            <h1 class="title">小米8SE 全面屏智能手机 4GB+64GB 蓝色 全网通4G 双卡双待</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥1549.00</span>
                    <span class="old">￥1749.00</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩10件</span>
                </p>
            </div>

        </div>


    </div>
</template>
<script>
export default {
    data(){
        return {
            id: '',
        }
    },
    methods: {

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

