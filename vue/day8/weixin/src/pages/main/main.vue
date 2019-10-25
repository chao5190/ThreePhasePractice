<template>
      <div>
   <Header color="green">微信</Header>
   <Search/>
   <Panel/>
   <tabbar/>
   <gallery/>
        </div>
</template>
<script>
import observer from '../../tools/observer'
import Header from '../../components/header.vue'
import Search from '../../components/search/search.vue'
import Panel from '../../components/panel/panel.vue'
import Contact from '../contact/contact.vue';
import Recover from '../recover/recover.vue';
import Mine from '../mine/mine.vue'
import tabbar from '../../components/tabbar/tabbar.vue'
import gallery from '../../components/gallery/gallery'
export default {
    components: {
        Header,
        Search,
        Panel,
        Contact,
        Recover,
        Mine,
        tabbar,
        gallery
    }
}
</script>