<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-22 22:19:36
 * @LastEditTime: 2021-04-22 22:34:24
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /基础/src/components/DynamicComp.vue
-->

<template>
  <div id="app">
    <component :is="curPage"></component>
    <button type="button" @click="curPage = 'news'">新闻</button>
    <button type="button" @click="curPage = 'mine'">个人中心</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      curPage: "news",
    };
  },
  components: {
    news: {
      template: `<div class="news">
        <h1>新闻页面</h1>
      </div>`,
    },
    mine: {
      template: `<div class="news">
        <h1>个人中心页面</h1>
      </div>`,
    },
  },
};
</script>
