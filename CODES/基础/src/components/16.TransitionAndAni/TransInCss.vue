<!--
 * @Author: Lee
 * @Date: 2023-06-13 18:17:32
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 18:19:35
 * @Description: 
-->
<script setup lang="ts">
// -- imports
import { ref } from 'vue';

// -- refs
const transition = ref(false);
</script>

<template>
  <div class="box" :class="{ transition }"></div>
  <button type="button" @click="transition = !transition">Toggle</button>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  background-color: red;
  transition: 0.5s background-color linear;
}
.transition {
  background-color: blue;
}
</style>
