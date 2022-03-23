<!--
 * @Author: Lee
 * @Date: 2022-01-03 22:52:56
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-03 23:10:50
-->

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  isActive: true,
  clsName: 'wrap',
  activeCls: 'active',
  errorCls: 'text-danger',
  color: 'blue',
  styleObj: {
    color: 'orange',
    fontSize: '16px',
  },
  baseStyle: {
    letterSpacing: '2px',
  },
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

  <!-- 对象绑定  -->
  <div :style="{ color: state.color, fontSize: '16px' }">Hello</div>
  <div :style="state.styleObj">Hello</div>
  <!-- 数组绑定 -->
  <div :style="[state.styleObj, state.baseStyle]">Hello</div>
</template>
