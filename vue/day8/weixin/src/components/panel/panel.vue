<template>
<div class="weui-panel weui-panel_access">
    <div class="weui-panel__hd">图文组合列表</div>
    <div class="weui-panel__bd">
        <a v-for="(item,index) in newsComputed" :key="index" href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg"
        :to="{
            name:'detail',
            params:{
                id:index
            },
            query:{
                name:'chao'
            }
            }">
            <div @click="showGallery(item.author.avatar_url)" class="weui-media-box__hd">
                <img class="weui-media-box__thumb" :src="item.author.avatar_url" alt="">
            </div>
            <div @click="navToDetail(index)" class="weui-media-box__bd">
                <h4 class="weui-media-box__title" v-text="item.title"></h4>
                <p class="weui-media-box__desc" v-text="item.author.loginname"></p>
            </div>
        </a>
    </div>
    <div @click='getNews' class="weui-panel__ft">
        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
            <div class="weui-cell__bd">查看更多</div>
            <span class="weui-cell__ft"></span>
        </a>
    </div>
</div>
</template>
<script>
import { mapActions } from "vuex";
import axios from 'axios'
import observer from '../../tools/observer'
export default {
      data() {
        return {
            news: [],
            page: 1,
            searchText: ''
        }
    },
    methods: {
        ...mapActions(["setGalleryStatus"]),
        getNews() {
            let _self = this
            axios.get('https://cnodejs.org/api/v1/topics', {
                params: {
                    page: this.page++,
                    tab: 'share',
                    limit: 10,
                    mdrender: false
                }
            }).then((data) => {
                _self.news = [..._self.news, ...data.data.data]
                console.log(data);

            })
        },
    
    navToDetail(index) {
      this.$router.push({
        name: "detail",
        params: {
          id: index
        },
        query: {
          name: "chao"
        }
      });
    },

    showGallery(imgUrl){
        this.setGalleryStatus({
            imgUrl,
            isShow:true
        });
        console.log(imgUrl);
        
    }
    },
    computed: {
        newsComputed() {
            console.log(this.searchText);
            if (this.searchText) {
                return this.news.filter((item) => {
                    if (item.title.indexOf(this.searchText) != -1) {
                        return item
                    }
                })
            } else {
                return this.news
            }

        }
    },

    mounted() {
        console.log(observer);
        observer.on('setSeatchText', (searchText) => {
            panel.searchText = searchText
        })
        console.log(this);

        this.getNews()
    }
}
</script>