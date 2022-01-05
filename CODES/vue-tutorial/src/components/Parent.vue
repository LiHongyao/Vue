<!--
 * @Author: Lee
 * @Date: 2022-01-05 19:49:22
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 20:16:31
-->

<!-- parent.vue -->
<script setup lang="ts">
// -- 引入子组件
import Child from './Child.vue';

// -- 监听子组件[change]事件
const onChange = (id: number) => {
  console.log(id);
};
// -- 监听子组件[update]事件
const onUpdate = (value: string) => {
  console.log(value);
};
</script>

<template>
  <Child name="Li-HONGYAO" :age="28" @change="onChange" @update="onUpdate" />
</template>
