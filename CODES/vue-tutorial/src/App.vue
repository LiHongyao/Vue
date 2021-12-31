<!--
 * @Author: Lee
 * @Date: 2021-12-28 21:36:15
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-31 16:55:05
-->

<!-- 脚本 -->
<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from 'vue';
import Basic from './components/Basic.vue';
import Response from './components/Response.vue';
import ModelBind from './components/ModelBind.vue';
import EventHandler from './components/EventHandler.vue';
/** -- 生命周期 */
console.log('__setup__');

onBeforeMount(() => {
  console.log('__onBeforeMount__');
});
onMounted(() => {
  console.log('__onMounted__');
});
onBeforeUpdate(() => {
  console.log('__onBeforeUpdate__');
});
onUpdated(() => {
  console.log('__onUpdated__');
});
onBeforeUnmount(() => {
  console.log('__onBeforeUnmount__');
});
onUnmounted(() => {
  console.log('__onUnmounted__');
});

/** 插值 */
</script>

<!-- 模板 -->
<template>
  <div class="app">Hello, Vue3.x!</div>
  <!-- <Response /> -->
  <!-- <Basic /> -->
  <!-- <ModelBind /> -->
  <EventHandler />
</template>

<!-- 样式 -->
<style scoped></style>
