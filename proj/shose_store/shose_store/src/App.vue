<template>
  <div id="app">
    <!-- 头部 -->
    <HeadView :title="title" :showBack="showBack" @search="searchChange"/>
    <!-- 内容 -->
    <router-view :keywords="searchKeywords"/>
    <!-- 尾部 -->
    <FootView v-show="showFoot"/>
  </div>
</template>

<script>
import HeadView from "./components/head-view"
import FootView from "./components/foot-view"
export default {
  name: 'App',
  data() {
    return {
      searchKeywords: ""
    }
  },
  props: {
    title: String,
    showBack: Boolean,
    showFoot: Boolean
  },
  components:{
    HeadView,
    FootView
  },
  methods: {
    searchChange(keywords) {
      this.searchKeywords = keywords;
    }
  }
  
}
</script>

<style>

* { margin: 0; padding: 0; }
html, body, #app { height: 100%; }
a { text-decoration: none; }
ul { list-style: none; }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  height: calc(100% - 49px - 64px);
  overflow-y: scroll;
}
</style>
