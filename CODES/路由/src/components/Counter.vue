<!--
 * @Author: Lee
 * @Date: 2022-01-11 09:40:24
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-11 14:20:10
-->

<script setup lang="ts">
import { useStore } from '../store';
// → 获取 store 对象
const store = useStore();
// → 事件处理函数
const increment = () => {
  /** 通过 commit 提交 mutaion，触发 state 更新 */
  store.commit('updateCount', store.state.count + 1);

};
</script>

<template>
  <!-- 访问 store 属性 -->
  <div>{{ store.getters.birth }}</div>
  <div>{{ store.state.count }}</div>
  <!-- 点击按钮，使 count 自增 -->
  <button type="button" @click="increment">INCREMENT</button>
</template>
