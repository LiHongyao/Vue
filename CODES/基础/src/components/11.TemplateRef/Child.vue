<script setup lang="ts">
// -- imports
import { ref } from 'vue';

const a = 1;
const b = ref<number>(2);
const sayHi = () => console.log('Hi');

// -- 像 defineExpose 这样的编译器宏不需要导入
defineExpose({
  a,
  b,
  sayHi,
});
</script>

<template></template>
