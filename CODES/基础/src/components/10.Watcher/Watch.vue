<!--
 * @Author: Lee
 * @Date: 2023-06-11 16:15:03
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 16:18:35
 * @Description:
-->
<script setup lang="ts">
// -- imports
import { ref, reactive, watch } from 'vue';

// -- refs
const name = ref('张三');
const age = ref(18);
const tel = ref('17398888669');
const otherName = reactive({
  firstName: '李',
  lastName: '四',
});

// -- methods
const fullName = () => otherName.firstName + otherName.lastName;

// -- watchs
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
  console.log(`age → 新值：${v1} 旧值：${o1}`);
  console.log(`tel → 新值：${v2} 旧值：${o2}`);
});
// 模拟修改数据
setTimeout(() => {
  name.value = '李四';
  otherName.firstName = '赵';
  age.value = 30;
  tel.value = '19938060716';
}, 1000);
</script>

<template></template>
