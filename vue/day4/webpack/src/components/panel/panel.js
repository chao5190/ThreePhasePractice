import Vue from "vue/dist/vue"
import template from './panel.html'
import axios from 'axios'
import observer from '../../tools/observer'
const panel = new Vue({
    el: "#panel",
    data: {
        news: [],
        page: 1,
        searchText: ''
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
    },
    computed: {
        newsComputed() {
            console.log(searchText);
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
    }
})
console.log(observer);
observer.on('setSeatchText', (searchText) => {
    panel.searchText = searchText
})
panel.getNews()
export default panel