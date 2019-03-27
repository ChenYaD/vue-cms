<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span >发布时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </p>
            <hr>
        <!--缩略图区域-->
        <div>
            <vue-preview
            :list="list"
            :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
            :previewBoxStyle="{border: '1px solid #eee'}"
            :tapToClose="true"
            @close="closeHandler"
            @destroy="destroyHandler"
            />
        </div>
        <!--图片内容区域-->
        <div class="content" v-html="photoinfo.content"></div>
        <!--导入现成的评论组件-->
        <comment-box :id="id"></comment-box>
        
    </div>
</template>
<script>

//导入评论子组件
import comment from '../subcomponents/comment.vue';
import {Toast} from 'mint-ui';
export default {

    data(){
        return{
            id: this.$route.params.id, //图片点击id
            photoinfo:'',  //图片信息
            list:[]  //缩略图
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods: {


        //获取图片详情
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/' +this.id).then(result =>{
                if(result.body.status ===0){
                    this.photoinfo = result.body.message[0];
                }else{
                    Toast('图片详情获取失败');
                }
            })
        }, 
        //获取缩略图
        getThumbs(){
            this.$http.get('api/getthumimages/' + this.id).then(result =>{
                if(result.body.status ===0){
                    //循环每个图片数据，补全图片的宽和高
                    result.body.message.forEach(element => {
                        element.h = 600;
                        element.w = 600;
                        this.list = result.body.message;
                    });
                }
            })
        },
        // 即将关闭的时候，调用这个处理函数
        closeHandler() {
        console.log('closeHandler')
        },
        // 完全关闭之后，调用这个函数清理资源
        destroyHandler() {
        console.log('destroyHandler')
        }
    },
    components: {
        //用来注册子组件的节点
        'comment-box':comment
    }


}
</script>
<style lang="scss" scoped>
.photoinfo-container{
    padding: 3px;
    
    h3{
        text-align: center;
        font-size: 15px;
        color: blue;
        margin: 15px 0px;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
}
</style>


