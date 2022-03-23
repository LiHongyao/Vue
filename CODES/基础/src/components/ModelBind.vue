<!--
 * @Author: Lee
 * @Date: 2021-12-31 16:43:50
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-31 16:49:34
-->

<script setup lang="ts">
import { ref } from 'vue';
// state
const inputValue = ref('');
// events
const onButtonTap = () => {
  inputValue.value = "I'm studing!";
};
</script>

<template>
  <div style="margin: 10px 0;">Enter Content：{{ inputValue }}</div>
  <!-- 通过 v-model 指令实现双向绑定 -->
  <!-- 1）更新inputValue 的值刷新视图 -->
  <!-- 2）在输入框输入内容，更新 inputValue -->
  <button type="button" @click="onButtonTap" style="margin-right: 10px;">手动修改 inputValue</button>
  <input type="text" v-model="inputValue" placeholder="请输入文本" />
</template>
