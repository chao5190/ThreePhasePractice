import Vue from 'vue/dist/vue'
import Header from '../../components/header.vue'
import Search from '../../components/search/search.vue'
import minepanel from '../../components/panel/panel.vue'

export default Vue.component('mine-wechat', {
    template: ` <div>
    <Header color="green">微信</Header>
    <Search></Search>
    <minepanel></minepanel>
    </div>`,

    components: {
        Header,
        Search,
        minepanel
    }

}, )