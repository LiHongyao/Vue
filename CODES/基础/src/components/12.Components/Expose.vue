<!--
 * @Author: Lee
 * @Date: 2023-06-11 17:40:00
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 17:40:16
 * @Description: 
-->

<script setup lang="ts">
// -- 变量
const name = '张三';
// -- 方法
const sayHello = (name: string) => {
  console.log(`Hello, ${name}!`);
};


// -- 将变量 name 和方法 sayHello 暴露给父组件
// -- 父组件可通过 ref 访问
defineExpose({
  name,
  sayHello,
});
</script>

<template></template>
