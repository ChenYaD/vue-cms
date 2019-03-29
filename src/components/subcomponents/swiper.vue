<template>

    <div>
        <!--首页轮播图-->
        <mt-swipe :auto="4000">
        <!--在组件中使用v-for循环时，一定要加key v-bind 绑定-->
        <!--谁使用此轮播图组件，谁向我们传递一个lunbotuList-->
        <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
            <img :src="item.img || item.src" alt="" :class = "{full:isfull}">
        </mt-swipe-item>
        </mt-swipe>
    </div>    
</template>
<script>
export default {
    props: ["lunbotuList","isfull"],  //父组件向子组件传值
    data(){
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.mint-swipe {
 height: 200px;
}
.mint-swipe-item{
    text-align: center;
   
  img{
      width: 100%;
      height: 100%;
  }
}
.full{
    width: 100%;
}
</style>


