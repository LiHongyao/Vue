<!--
 * @Author: Lee
 * @Date: 2022-03-29 16:29:41
 * @LastEditors: Lee
 * @LastEditTime: 2022-03-29 16:37:47
-->

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
  showMask: false,
});
const onTap = () => {
  state.showMask = true;
  scrollDisabled();
};
const onClose = () => {
  state.showMask = false;
};
const scrollDisabled = () => {
  document.body.style.overflow = 'hidden';
};
</script>

<template>
  <div class="page">
    <div class="box" @click="onTap"></div>
    <div v-show="state.showMask" class="mask" @click="onClose"></div>
  </div>
</template>

<style scoped>
.box {
  width: 100%;
  height: 3000px;
  background: orange;
}
.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
}
</style>
