<!--
 * @Author: Lee
 * @Date: 2021-12-28 21:36:15
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 06:46:22
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
import Conditional from './components/Conditional.vue';
import ListRendering from './components/ListRendering.vue';
import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import BindClassAndStyle from './components/BindClassAndStyle.vue';
import InputBinding from './components/InputBinding.vue';
import TransitionAndAnimation from './components/TransitionAndAnimation.vue';

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
  <!-- <div class="app" v-highlight="'blue'">Hello, Vue3.x!</div> -->
  <!-- <Response /> -->
  <!-- <Basic /> -->
  <!-- <ModelBind /> -->
  <!-- <EventHandler /> -->
  <!-- <Conditional /> -->
  <!-- <ListRendering /> -->
  <!-- <Computed /> -->
  <!-- <Watch /> -->
  <!-- <BindClassAndStyle /> -->
  <!-- <InputBinding /> -->
  <TransitionAndAnimation />
</template>

<!-- 样式 -->
<style scoped></style>
