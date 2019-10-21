import Vue from 'vue/dist/vue'
const header = new Vue({
    el: "#header",
    data: {
        title: "今日头条"
    },
    template: '<header>{{title}}</header>'


})
export default header