import Vue from 'vue/dist/vue'
import '../../components/panel2/panel2'
export default Vue.component('mine-contact', {
    template: `
        <div>
            <mine-header color='gray'>通讯录</mine-header>
            <mi-search></mi-search>
            <little-panel></little-panel>
        </div>
    `
})