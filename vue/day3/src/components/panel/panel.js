import Vue from "vue/dist/vue"
import template from './panel.html'
import axios from 'axios'
const panel = new Vue({
    el: "#panel",
    data: {
        news: [],
        page: 1
    },
    template,
    methods: {
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
        }
    }
})
panel.getNews()
export default panel