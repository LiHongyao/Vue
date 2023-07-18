<!--
 * @Author: Lee
 * @Date: 2023-06-11 11:58:52
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 11:59:46
 * @Description: 
-->

<script setup lang="ts">
const msg = 'Hello, vue3.x!';
const htmlStr = '<div>Name: Li-HONGYAO</div>';
const isLogin = false;
const letetrs = 'ABCDE';
const className = 'wrap';
</script>

<template>
  <!-- Mustache -->
  <div>{{ msg }}</div>
  <!-- v-text：指令 -->
  <div v-text="msg"></div>
  <!-- v-html：指令（可以识别HTML标签） -->
  <div v-html="htmlStr"></div>
  <!-- 表达式 -->
  <div>LoginStatus：{{ isLogin ? '已登录' : '未登录' }}</div>
  <div>{{ letetrs.split('').reverse().join('') }}</div>
  <!-- 属性绑定 -->
  <div :class="className"></div>
</template>
