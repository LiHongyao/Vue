<!--
 * @Author: Lee
 * @Date: 2023-06-11 17:30:03
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-12 23:29:55
 * @Description: 
-->
<script setup lang="ts">
import { inject } from 'vue';
import { APP_KEY } from './keys';

const foo = inject(APP_KEY);
console.log(foo);

// -- props
interface IProps {
  name?: string;
  age?: number;
  job?: string;
}
const props = withDefaults(defineProps<IProps>(), {
  name: '————',
  age: 0,
  job: '未知',
});
console.log(props);
// -- emits
const emits = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();
</script>

<template>
  <div>{{ name }} - {{ age }} - {{ job }}</div>
  <button type="button" @click="emits('change', 1)">触发[change]事件</button>
  <button type="button" @click="emits('update', 'Hello')">
    触发[update]事件
  </button>
</template>
