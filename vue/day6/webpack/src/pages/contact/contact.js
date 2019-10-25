import Vue from 'vue/dist/vue'
import '../../components/panel2/panel2'
import Search from '../../components/search/search.vue'
export default Vue.component('mine-contact', {
    template: `
        <div>
            <mine-header color='gray'>通讯录</mine-header>
            <Search></Search>
            <little-panel></little-panel>
        </div>
    `
})