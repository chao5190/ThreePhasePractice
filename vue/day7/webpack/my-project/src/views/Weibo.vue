<template>
    <div class="weibo">
        <Header/>
        <Panel/>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Panel from '../components/Panel.vue'
export default {
    name:"weibo",
    components:{
        Header,
        Panel
    }
}
</script>
<style scoped>
.weibo{
    margin-top: 100px;
}
.main-top{
    margin-top:20px;
}
</style>
