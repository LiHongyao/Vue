<!--
 * @Author: Lee
 * @Date: 2022-01-06 16:36:23
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-06 18:51:05
-->

<script setup lang="ts">
import { reactive, shallowRef, defineComponent, useAttrs } from 'vue';

const attrs = useAttrs();
console.log(attrs);

// -- 定义组件
const Home = defineComponent({
  template: `<div class="page">This is Home page.</div>`,
});
const News = defineComponent({
  template: `<div class="page">This is News page.</div>`,
});
const Mine = defineComponent({
  template: `<div class="page">This is Mine page.</div>`,
});

// -- 定义状态
const state = reactive({
  currentTab: shallowRef(Home),
  tabs: ['Home', 'News', 'Mine'],
});

// -- 时间处理
const switchTab = (key: string) => {
  switch (key) {
    case 'Home':
      state.currentTab = Home;
      break;
    case 'News':
      state.currentTab = News;
      break;
    case 'Mine':
      state.currentTab = Mine;
      break;
  }
};
</script>

<template>
  <div class="wrap">
    <button
      type="button"
      v-for="(item, index) in state.tabs"
      :key="index"
      @click="switchTab(item)"
    >
      {{ item }}
    </button>
    <component :is="state.currentTab"></component>
  </div>
</template>

<style scoped>
button {
  margin-bottom: 16px;
}
</style>
