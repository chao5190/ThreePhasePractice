import Vue from "vue/dist/vue"
import template from './search.html'
const search = new Vue({
    el: "#search",
    data: {
        title: "搜索",
        isFocus: 0,
        searchText: '',
        cancel: '取消'
    },
    template,
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
        },
        clear() {
            this.searchText = ''
        }
    }
})
export default search