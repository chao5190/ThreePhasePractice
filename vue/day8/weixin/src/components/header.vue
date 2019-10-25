<template>
    <header :style="{
        backgroundColor: color
    }">
        <slot></slot>
    </header>
</template>
<script>
export default {
    props: {
        color: String
    },
}
</script>
<style scoped>

</style>