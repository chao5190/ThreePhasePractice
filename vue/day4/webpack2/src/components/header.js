import Vue from 'vue/dist/vue'
export default Vue.component('mine-header', {
    props: {
        color: String
    },
    data() {
        return {
            title: "今日头条"
        }
    },
    template: `<header :style="{
        backgroundColor:color
}">
    <slot></slot>
</header>`
})