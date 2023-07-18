<!-- 脚本 -->
<script setup lang="ts">
// -- imports
import { ref } from 'vue';

// -- refs
const count = ref(0);
</script>

<!-- 模板 -->
<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<!-- 样式 -->
<style lang="less" scoped></style>
