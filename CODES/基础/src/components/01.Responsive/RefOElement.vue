<script setup lang="ts">
// -- imports
import { onMounted, ref } from 'vue';

// -- refs
const dom = ref<HTMLDivElement>();
// -- life circles
onMounted(() => {
 
  console.log(dom.value);  // <div>Hello, Vue.js!</div>
});
</script>

<template>
  <div ref="dom">Hello, Vue.js!</div>
</template>
