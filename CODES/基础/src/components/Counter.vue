<!--
 * @Author: Lee
 * @Date: 2022-01-05 21:15:21
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 21:32:51
-->


<!-- Counter.vue -->
<script setup lang="ts">
interface IProps {
  min?: number;
  max?: number;
  count?: number;
}
const props = withDefaults(defineProps<IProps>(), {
  min: 1,
  max: 5,
  count: 1,
});

const emit = defineEmits<{
  (e: 'update:count', count: number): void;
}>();

// events
const plus = () => {
  const { count, max } = props;
  emit('update:count', count + 1 > max ? max : count + 1);
};
const minus = () => {
  const { count, min } = props;
  emit('update:count', count - 1 < min ? min : count - 1);
};
</script>

<template>

  <div class="wrap">
    <span>子组件：</span>
    <button type="button" @click="minus">减</button>
    <div class="v">{{ count }}</div>
    <button type="button" @click="plus">加</button>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.v {
  text-align: center;
  width: 50px;
  font-weight: bold;
}
</style>
