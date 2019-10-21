import Vue from 'vue/dist/vue'
import template from './myself.html'
export default Vue.component("my-self", {
    data() {
        return {
            array: [{
                    title: "支付"
                },
                {
                    title: "收藏"
                }, {
                    title: "相册"
                }, {
                    title: "卡包"
                }, {
                    title: "表情"
                }, {
                    title: "设置"
                }
            ]
        }
    },
    template
})