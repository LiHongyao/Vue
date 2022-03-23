<!--
 * @Author: Lee
 * @Date: 2022-01-06 19:09:31
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-06 19:14:32
-->

<script setup lang="ts">
// +++
import { useAttrs } from 'vue';
// +++

defineProps<{ name: string }>();
// +++
// -- 获取非props属性
const attrs = useAttrs();
console.log(attrs); // → Proxy {job: 'Senior Front-End Developer', __vInternal: 1}
// +++

</script>

<template></template>
