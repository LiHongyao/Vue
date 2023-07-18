<!--
 * @Author: Lee
 * @Date: 2023-06-11 15:00:06
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 15:10:37
 * @Description: 
-->

<script setup lang="ts">
import { reactive } from 'vue';
const heros = reactive([
  { name: '张良' },
  { name: '露娜' },
  { name: '妲己' },
  { name: '甄姬' },
  { name: '虞姬' },
]);

const user = reactive({
  name: 'Li-HONGYAO',
  job: '前端工程师',
});
</script>

<template>
  <!-- 循环数字 -->
  <ul>
    <li v-for="(item, index) in 5" :key="index">
      index：{{ index }} -- item：{{ item }}
    </li>
  </ul>
  <!-- 循环数组 -->
  <ul>
    <li v-for="(item, index) in heros" :key="index">{{ item.name }}</li>
  </ul>
  <!-- 循环对象 -->
  <ul>
    <li v-for="(value, key, index) in user" :key="index">
      {{ key }}：{{ value }}({{ index }})
    </li>
  </ul>
</template>
