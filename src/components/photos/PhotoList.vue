<template>
    <div>
        <div id="slider" class="mui-slider">
            <!--头部图片分类-->
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
                        <!--全部按钮(id=0)默认被选中-->
						<a :class="['mui-control-item', item.id ==0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
						
					</div>
				</div>

                <!--图片列表 改造li成router-link的时候，需要使用tag属性指定要渲染为哪种元素-->
                <ul class="photo-list">
                    <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                        <img v-lazy="item.img_url">
                        <div class="info">

                            <h1 class="info-title">{{item.title}}</h1>
                            <div class="info-body">{{item.zhaiyao}}</div>
                        </div>
                    </router-link>
                </ul>
		</div>
    </div>
</template>
<script>


//初始化mui的js文件
import mui from '../../lib/mui/js/mui.min.js';
import {Toast} from 'mint-ui';

export default {
    data(){
        return {
            cates:'',//所有的图片分类
            list:[] //图片列表
        }
    },

    created(){
        this.getPhotoCategory();
        this.getPhotoListByCateId(0);//页面刚加载时显示‘全部’分类下的图片
    },
    mounted(){  //当组件中的DOM结构被渲染好后，会执行这个钩子函数
        //初始化滑动组件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });

    },
    methods:{
        //获取图片分类列表
        getPhotoCategory(){
            this.$http.get('api/getimgcategory').then(result =>{
                if(result.body.status ===0){
                    //手动拼接出一个最完整的分类列表
                    result.body.message.unshift({title:"全部",id:0});
                    this.cates = result.body.message;
                }else {
                    Toast("加载失败！");
                }
            })
        },
        //根据分类id获取图片列表
        getPhotoListByCateId(cateid){
            this.$http.get('api/getimages/'+cateid).then(result =>{
                if(result.body.status ===0){
                    this.list = result.body.message;
                }else {
                    Toast('图片加载失败！');
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
* {
    touch-action: pan-y;
}

.photo-list{
    list-style: none;
    margin: 0px;
    padding: 10px;
    padding-bottom: 0px;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 6px #999;
        position: relative;

        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
        }
        .info{
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0px;
            background-color: rgba(0, 0, 0, 0.4);
            max-height: 84px;
    
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
}


</style>


