<!--
 * @Author: Lee
 * @Date: 2023-06-11 14:23:51
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 14:24:05
 * @Description: 
-->

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  isActive: true,
  clsName: 'wrap',
  activeCls: 'active',
  errorCls: 'text-danger',
});
</script>

<template>
  <!-- 变量绑定 -->
  <div :class="state.clsName"></div>
  <!-- 对象绑定 -->
  <div :class="{ active: false, error: true }"></div>
  <!-- 数组绑定 -->
  <div :class="[state.activeCls, state.errorCls]"></div>
  <!-- 表达式绑定 -->
  <div :class="state.isActive ? 'active' : ''"></div>
</template>
