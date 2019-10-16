import Vue from "vue/dist/vue.js"
import template from './actionsheet.html'
const actionsheet = new Vue({
    el: '#action',
    data: {
        iostitle: "iOS ActionSheet",
        isFocus: 0,
        style: "display:none",
        TorF: "display:none"
    },
    template,
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
            this.style = "opacity:1"
        },
        click() {
            this.style = "display:none"
            this.isFocus = !this.isFocus
        },
        toggleFocus2() {
            this.TorF = "opacity:1"
        },
        click2() {
            this.TorF = "display:none"
        }
    }
})

export default actionsheet