<template>
  <div id="app">
     <router-link :to="{ name: 'weibo'}">weibo</router-link>|
    <router-link :to="{ name: 'login'}">login</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
   components: {}
}
</script>

<style>
  #app{
    font-style: 20px;
    text-align: center
  }
</style>
