<!--
 * @Author: Lee
 * @Date: 2021-12-31 16:54:39
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-01 03:30:39
-->

<script setup lang="ts">
import { ref } from 'vue';

// state
const count = ref(0);
// events
const handler1 = (name: string) => {
  console.log(`Hello, ${name}!`);
};
const handler2 = () => {
  console.log('Button Click!');
};
const handler3 = (event: Event, job: string) => {
  console.log(event, job);
};
const handler4 = () => {
  console.log('__handler4__');
};
const handler5 = () => {
  console.log('__handler5__');
};
</script>

<template>
  <!-- 通过内联脚本处理事件 -->
  <button type="button" @click="++count">
    Click Button {{ count }} times.
  </button>
  <button type="button" @click="handler1('Li-HONGYAO')">Button 1</button>
  <!-- 通过监听函数处理事件 -->
  <button type="button" @click="handler2">BUTTON 2</button>
  <button type="button" @click="handler3($event, '前端工程师')">BUTTON 3</button>
  <button type="button" @click="handler4(), handler5()">BUTTON 4</button>
</template>
