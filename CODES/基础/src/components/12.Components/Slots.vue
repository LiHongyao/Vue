<!--
 * @Author: Lee
 * @Date: 2023-06-12 23:34:56
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-12 23:40:30
 * @Description: 
-->

<!-- Link.vue -->
<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <a :href="to">
    <slot />
  </a>
</template>
