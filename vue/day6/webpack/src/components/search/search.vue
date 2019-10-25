<template>
<div :class="['weui-search-bar',{'weui-search-bar_focusing':isFocus}]" id="searchBar">
    <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required=""
                v-model="searchText">
            <a @click='clear' href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label @click='toggleFocus' class="weui-search-bar__label" id="searchText">
            <i class="weui-icon-search"></i>
            <span>{{title}}</span>
        </label>
    </form>
    <a v-on:click='toggleFocus' href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">{{cancel}}</a>
</div>
</template>
<script>
import observer from '../../tools/observer'
export default {
    data() {
        return {
            title: "搜索",
            isFocus: 0,
            searchText: '',
            cancel: '取消'
        }
    },
    methods: {
        toggleFocus() {
            this.isFocus = !this.isFocus
        },
        clear() {
            this.searchText = ''
        }
    },
    watch: {
        searchText() {
            //使用观察者模式
            observer.emit('setSeatchText', this.searchText)
        }
    }
}
</script>