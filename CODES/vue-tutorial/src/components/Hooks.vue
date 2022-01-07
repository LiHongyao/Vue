<!--
 * @Author: Lee
 * @Date: 2022-01-07 11:51:03
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-07 14:38:48
-->

<script setup lang="ts">
import { ref } from 'vue';
import useCount from '../hooks/useCount';

const a = ref(0);
const b = ref(0);

const { result, plus, minus, multiply, divide } = useCount(a, b);
</script>

<template>
  <p>
    <span>a：</span>
    <input v-model.number="a" />
  </p>
  <p>
    <span>b：</span>
    <input v-model.number="b" />
  </p>
  <p>
    <span>Actions：</span>
    <button type="button" @click="plus">+</button>
    <button type="button" @click="minus">-</button>
    <button type="button" @click="multiply">x</button>
    <button type="button" @click="divide">÷</button>
  </p>
  <p>
    <span>Result：</span>
    <span>{{ result }}</span>
  </p>
  <hr color="red" />
</template>

<style scoped>
button {
  margin-right: 10px;
}
</style>
