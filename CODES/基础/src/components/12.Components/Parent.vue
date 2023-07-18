<!--
 * @Author: Lee
 * @Date: 2023-06-11 17:31:25
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 17:33:32
 * @Description: 
-->

<script setup lang="ts">
// -- 导入子组件（无需注册）
import Child from './Child.vue';
</script>

<template>
  <!-- 使用子组件 -->
  <Child name="张三" :age="30" job="前端工程师" />
  <Child />
</template>
