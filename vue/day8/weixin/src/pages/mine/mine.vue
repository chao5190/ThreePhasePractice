<template>
        <div>
    <myself></myself>
    <tabbar></tabbar>
    </div>
</template>
<script>
import myself from "../../components/mine-panel/myself.vue";
import tabbar from '../../components/tabbar/tabbar.vue'
export default {
    components: {
        myself,
        tabbar
    }
}
</script>