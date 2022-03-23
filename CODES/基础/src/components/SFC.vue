<!--
 * @Author: Lee
 * @Date: 2022-01-05 18:36:47
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 18:37:52
-->
<!-- 脚本 -->
<script setup lang="ts">
import { ref } from 'vue';

const greeting = ref('Hello World!');
</script>

<!-- 模板 -->
<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<!-- 样式 -->
<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
