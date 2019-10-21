import Vue from 'vue/dist/vue'
import "../../components/header"
import '../../components/search/search'
import '../../components/panel/panel'

export default Vue.component('mine-wechat', {
    template: ` <div>
    <mine-header color="green">微信</mine-header>
    <mi-search></mi-search>
    <mine-panel></mine-panel>
    </div>`



})