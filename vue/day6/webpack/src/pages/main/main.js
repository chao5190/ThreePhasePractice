import Vue from 'vue/dist/vue'
import observer from '../../tools/observer'

export default Vue.component('mi-main', {
    data() {
        return {
            tabbar: 'mine-wechat'
        }
    },
    template: `
        <div>
        <keep-alive>
            <component :is="tabbar"></component>
        </keep-alive>
        </div>
    `,
    mounted() {
        observer.on('setTabbar', (index) => {
            switch (index) {
                case 0:
                    this.tabbar = "mine-wechat";
                    break;
                case 1:
                    this.tabbar = 'mine-contact'
                    break;
                case 2:
                    this.tabbar = 'mine-recover'
                    break;
                case 3:
                    this.tabbar = 'my-panel'
                    break;
                default:
                    break;
            }
            console.log(index);

        })
    }
})