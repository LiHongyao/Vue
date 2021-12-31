<!--
 * @Author: Lee
 * @Date: 2021-12-31 18:29:51
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-01 03:09:42
-->

<script setup lang="ts">
import { reactive, ref } from 'vue';

const refs = ref<HTMLLIElement[]>([]);

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

setTimeout(() => {
  heros.push({ name: '哪吒' });
}, 1000);

const pushDom = (el: any) => {
  refs.value.push(el as HTMLLIElement);
};
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
    <li v-for="(item, index) in heros" :key="index" :ref="pushDom">
      {{ item.name }}
    </li>
  </ul>
  <!-- 循环对象 -->
  <ul>
    <li v-for="(value, key, index) in user" :key="index">
      {{ key }}：{{ value }}({{ index }})
    </li>
  </ul>
</template>
