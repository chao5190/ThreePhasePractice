<template>
    <div>搜索页
        <button v-on:click="navToHome()">跳转Home页面</button>

    </div>
</template>
<script>
export default {
    data(){
        return {
            name:'yao'
        };
    },
    methods: {
        navToHome(){
            console.log(this);
            
            this.$router.push({name:
            'home'})
            // router.push({name:
            // 'Home'})
        }
    }
}
</script>