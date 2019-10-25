<template>
      <div>
          <Header color="gray">通讯录</Header>
            <Search></Search>
            <ConPanel></ConPanel>
            <tabbar />
        </div>
</template>
<script>
import Header from '../../components/header.vue'
import Search from '../../components/search/search.vue'
import ConPanel from "../../components/panel2/panel.vue";
import tabbar from '../../components/tabbar/tabbar.vue'
export default {
    components: {
        Search,
        ConPanel,
        tabbar,
        Header
    }
}
</script>