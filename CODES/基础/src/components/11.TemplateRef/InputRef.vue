<!--
 * @Author: Lee
 * @Date: 2023-06-11 16:43:52
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 16:45:00
 * @Description:  
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref<HTMLInputElement | null>(null);

onMounted(() => {
  input.value?.focus();
});
</script>

<template>
  <input ref="input" />
</template>
