<template>
    <div class="newsinfo-container">
        <!--新闻标题-->
        <h3 class="title">{{newsinfo.title}}</h3>
        <p class="subtitle">

            <span>发表时间：{{newsinfo.add_time | dataFormat}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <!--新闻内容-->
        <div class="content" v-html="newsinfo.content"> </div>

        <!--评论组件区　:id="this.id 父组件NewInfo.vue向子组件comment.vue传值"-->
        <comment-box  :id="this.id"></comment-box>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';

//导入评论子组件
import comment from '../subcomponents/comment.vue';

export default{
    data(){
        return {
            id: this.$route.params.id,  //将url地址中传递过来的id值挂载到data中，方便以后调用
           // newsinfo:{}
           newsinfo:'' //新闻对象
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods: {
        //获取新闻详情
        getNewsInfo(){
            
            this.$http.get('api/getnew/' + this.id).then(result =>{

                if(result.body.status ===0){
                    
                    this.newsinfo = result.body.message[0];
                }else{
                    Toast("新闻详情获取失败");
                }
            })
        }
    },
    components: {
        //用来注册子组件的节点
        'comment-box':comment
    }
    
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        text-align: center;
        font-size: 16px;
        margin: 15px 0;
        color:  red;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        color: #226aff;
        font-size: 13px;

    }
    .content{
        img{
            width: 100%;
        }
        
    }
}
</style>


