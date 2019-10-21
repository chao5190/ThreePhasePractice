import 'weui'
import Vue from 'vue/dist/vue'
import "./styles/styles.css"
import './components/tabbar/tabbal'
import './pages/contact/contact'
import './pages/main/main'
import './pages/wechat/wechat'
import './pages/mine/mine'
import './pages/recover/recover'
new Vue({
    el: "#app",
    template: `<div>
    <mi-main></mi-main>
    <mine-tabbar></mine-tabbar>
    </div>
    `
})