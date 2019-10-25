import Vue from 'vue/dist/vue'
import template from './panel2.html'
export default Vue.component("little-panel", {
    data() {
        return {
            array: [{
                    title: "新的朋友"
                },
                {
                    title: "群聊"
                }, {
                    title: "标签"
                }, {
                    title: "公众号"
                }
            ]
        }
    },
    template

})