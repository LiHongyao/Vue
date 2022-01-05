<!--
 * @Author: Lee
 * @Date: 2022-01-05 19:49:22
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 21:32:09
-->

<!-- parent.vue -->
<!-- <script setup lang="ts">
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
</template> -->

<!-- v-mode -->
<!-- 父组件 -->
<!-- <script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

const msg = ref('Hello, vue.js!');
</script>

<template>
  <Child v-model="msg" />
  <div>父组件：{{ msg }}</div>
</template> -->

<!-- v-mode:count -->
<script setup lang="ts">
import { ref } from 'vue';
import Counter from './Counter.vue';
const count = ref(1);
</script>

<template>
  <Counter v-model:count="count" />
  <p>父组件：商品数量 → {{ count }}</p>
</template>
