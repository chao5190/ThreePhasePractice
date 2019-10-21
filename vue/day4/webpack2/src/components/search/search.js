import Vue from "vue/dist/vue"
import template from './search.html'
import observer from '../../tools/observer'
export default Vue.component('mi-search', {
    data() {
        return {
            title: "搜索",
            isFocus: 0,
            searchText: '',
            cancel: '取消'
        }
    },
    template,
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
        },
        clear() {
            this.searchText = ''
        }
    },
    watch: {
        searchText() {
            //使用观察者模式
            observer.emit('setSeatchText', this.searchText)
        }
    }
})