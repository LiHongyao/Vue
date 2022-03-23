<!--
 * @Author: Lee
 * @Date: 2022-01-01 11:02:18
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-03 22:19:02
-->

<script setup lang="ts">
import { ref, computed } from 'vue';

const idNo = ref('');
const birth = computed(() => {
  if (idNo.value.length !== 18 || isNaN(Number(idNo.value))) {
    return '';
  }
  let t = idNo.value;
  let year = t.slice(6, 10);
  let month = t.slice(10, 12);
  let day = t.slice(12, 14);
  return `${year}-${month}-${day}`;
});

// set & get
const count = ref(1);
const plusOne = computed({
  set: (v) => {
    console.log(v);
    count.value = v - 1;
  },
  get: () => {
    return count.value + 1;
  },
});
plusOne.value = 10;
console.log(plusOne.value);
</script>

<template>
  <div>
    <span>身份证号：</span>
    <input type="text" v-model="idNo" placeholder="请输入身份证号" />
  </div>
  <div>
    <span>出生年月：</span>
    <span>{{ birth }}</span>
  </div>
</template>
