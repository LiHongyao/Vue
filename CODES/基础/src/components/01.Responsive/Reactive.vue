<!--
 * @Author: Lee
 * @Date: 2023-06-06 17:08:01
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-06 18:31:24
 * @Description: 
-->

<script setup lang="ts">
// -- imports
import { reactive } from 'vue';

// -- Define State Props
interface IState {
  count: number;
  user: {
    name: string;
  };
}
// -- State
const state = reactive<IState>({
  count: 0,
  user: {
    name: '张三',
  },
});

// -- events
const onIncrement = () => {
  state.user.name = '李四';
  state.count++;
};
</script>

<template>
  <p>{{ state.user.name }}</p>
  <button @click="onIncrement">{{ state.count }}</button>
</template>

<style lang="less"></style>
