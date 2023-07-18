<!--
 * @Author: Lee
 * @Date: 2023-06-06 18:43:30
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-06 18:45:11
 * @Description: 
-->
<script setup lang="ts">
// -- imports
import { reactive, toRefs } from 'vue';

// -- Define State Props
interface IState {
  name: string;
  age: number;
}
// -- state
const state = reactive<IState>({
  name: 'Li-HONGYAO',
  age: 18,
});

/**
stateAsRefs: {
  name: Ref<string>,
  age: Ref<number>
}*/
const stateAsRefs = toRefs(state);

// ref 和原始 property 已经连接起来了
state.age++;
console.log(stateAsRefs.age.value); // 19

stateAsRefs.age.value++;
console.log(state.age); // 20
</script>

<template></template>
