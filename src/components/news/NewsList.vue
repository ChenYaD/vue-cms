<template>
    <div>

        <!--新闻列表页面-->
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time | dateFormat}}</span>
                                <span>点击了：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';

export default{
    data(){
        return {
            newsList: []
        }
    },
    created(){
        this.getNewsLsit();
    },
    methods: {
        //获取新闻列表
        getNewsLsit(){
            this.$http.get('api/getnewslist').then(result =>{
                if(result.body.status ===0){
                    //如果成功，把数据保存在data中
                    this.newsList = result.body.message;
                }else{
                    Toast('获取新闻列表失败');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
    }
    .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}
</style>

