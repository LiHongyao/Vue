<!--
 * @Author: Lee
 * @Date: 2021-12-31 16:54:39
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-31 16:56:26
-->

<script setup lang="ts">
// 事件处理函数
const onButtonTap = () => {
  console.log('The button tag is clicked!');
};
</script>

<template>
  <button type="button" @click="onButtonTap">Tap Me.</button>
</template>
