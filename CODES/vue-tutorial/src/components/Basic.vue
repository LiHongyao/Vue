<!--
 * @Author: Lee
 * @Date: 2021-12-31 15:24:14
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-31 16:37:18
-->

<script setup lang="ts">
import { reactive } from 'vue';

const msg = 'Hello, vue3.x!';
const htmlStr = '<div>Name: Li-HONGYAO</div>';
const isLogin = false;
const letetrs = 'ABCDE';
const className = 'wrap';

const state = reactive({
  className: 'wrap',
  inputValue: '',
});

const onLogin = () => {
  console.log('login...');
};
const onInput = (v: Event) => {
  console.log(v);
};
</script>

<template>
  <!-- 插值 - start -->
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
  <!-- 插值 - start -->

  <!-- 指令 & 参数 & 修饰符 start -->
  <div>
    <div v-bind:class="state.className">123</div>
    <input
      type="text"
      placeholder="请输入字符"
      v-model.number="state.inputValue"
      @input="onInput"
    />
  </div>
  <!-- 指令 & 参数 & 修饰符 end -->
</template>
