<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';

const refs = ref<HTMLLIElement[]>([]);

const heros = reactive([
  { name: '张良' },
  { name: '露娜' },
  { name: '妲己' },
  { name: '甄姬' },
  { name: '虞姬' },
]);

const pushDom = (el: any) => {
  // 存储DOM元素（li）
  refs.value.push(el as HTMLLIElement);
};

onMounted(() => {
  console.log(refs.value);
});
</script>

<template>
  <ul>
    <li v-for="(item, index) in heros" :key="index" :ref="pushDom">
      {{ item.name }}
    </li>
  </ul>
</template>
