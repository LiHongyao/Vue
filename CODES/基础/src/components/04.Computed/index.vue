<!--
 * @Author: Lee
 * @Date: 2023-06-11 12:12:55
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 14:11:46
 * @Description: 
-->
<!-- <script setup lang="ts">
// -- imports
import { ref, computed } from 'vue';

// -- refs
const point = ref<string | number>('');
// -- computed
const amount = computed<number>(() => {
  return +(+point.value / 100).toFixed(2);
});
</script>

<template>
  <div>
    <span>输入积分：</span>
    <input type="number" v-model="point" placeholder="请输入积分数量" />
  </div>
  <div>
    <span>等价金额：</span>
    <span>&yen;{{ amount }}</span>
  </div>
</template> -->

<script setup lang="ts">
// -- imports
import { ref, computed } from 'vue';

// -- refs
const idNo = ref('');

// -- computed
const birth = computed<string>(() => {
  if (idNo.value.length !== 18 || isNaN(Number(idNo.value))) {
    return '';
  }
  let t = idNo.value;
  let year = t.slice(6, 10);
  let month = t.slice(10, 12);
  let day = t.slice(12, 14);
  return `${year}-${month}-${day}`;
});
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
