import Vue from 'vue/dist/vue'
import template from './re-panel.html'
export default Vue.component("re-panel", {
    data() {
        return {
            array: [{
                    title: "朋友圈"
                },
                {
                    title: "扫一扫"
                }, {
                    title: "摇一摇"
                }, {
                    title: "看一看"
                }, {
                    title: "搜一搜"
                }, {
                    title: "附近的人"
                }, {
                    title: "购物"
                }, {
                    title: "游戏"
                }, {
                    title: "小程序"
                },
            ]
        }
    },
    template

})