<!--
 * @Author: Lee
 * @Date: 2022-01-03 22:30:46
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-03 22:46:47
-->

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue';

// refs
const name = ref('Muzili');
const age = ref(18);
const tel = ref('15999999999');
const otherName = reactive({
  firstName: '李',
  lastName: '杰',
});

// methods
const fullName = () => otherName.firstName + otherName.lastName;

// watchs
// 1. 监听指定属性
watch(name, (v, o) => {
  console.log(`新值：${v}，旧值：${o}`);
});

// 2. 监听函数返回值
watch(fullName, (v) => {
  // 当otherName中的 firstName或者lastName发生变化时，都会进入这个函数
  console.log(`我叫${v}.`);
});
// 3. 监听多个属性变化
watch([age, tel], ([v1, v2], [o1, o2]) => {
  console.log(`age -> 新值：${v1} 旧值：${o1}`);
  console.log(`tel -> 新值：${v2} 旧值：${o2}`);
});
// 模拟修改数据
setTimeout(() => {
  name.value = '木子李';
  otherName.firstName = '张';
  age.value = 28;
  tel.value = '15888888888';
}, 1000);

//-------- watchEffect
// refs
const page = ref(1);
const pageSize = ref(10);
// effects
watchEffect(() => {
  console.log(`请求数据 -> 页码：${page.value}，每页条数：${pageSize.value}`);
});
// 模拟修改数据
setTimeout(() => {
  page.value = 2;
}, 1000);

const count = ref(0);
watchEffect(() => {
  console.log(count.value);
});

</script>

<template>
  <div>{{ count }}</div>
</template>
