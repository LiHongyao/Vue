<!--
 * @Author: Lee
 * @Date: 2022-01-05 19:43:26
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 20:13:28
-->

<!-- child.vue -->
<script setup lang="ts">
// -- 声明属性类型（TS）
interface IProps {
  name: string;
  age: number;
  job?: string;
}
// -- 定义属性
const props = withDefaults(defineProps<IProps>(), {
  name: 'Muzili',
  age: 18,
  job: '未知',
});
console.log(props);

// -- 定义事件
const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();
</script>

<template>
  <div>{{ name }} - {{ age }} - {{ job }}</div>
    <button type="button" @click="emit('change', 1)">触发[change]事件</button>
    <button type="button" @click="emit('update', 'Hello')">触发[update]事件</button>
</template>
