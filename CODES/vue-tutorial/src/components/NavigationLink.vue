<!--
 * @Author: Lee
 * @Date: 2022-01-06 14:50:18
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-06 15:29:56
-->

<script setup lang="ts">
defineProps<{ url: string }>();
</script>

<template>
<a :href="url">
    <!-- 接收插槽内容 -->
    <slot>默认内容</slot>
</a>
</template>
