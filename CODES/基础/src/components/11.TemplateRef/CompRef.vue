<script setup lang="ts">
// -- imports
import { ref, onMounted } from 'vue';
import Child from './Child.vue';

// -- refs
const child = ref<InstanceType<typeof Child> | null>(null);

// -- life circles
onMounted(() => {
  child.value?.sayHi();
  console.log(child.value?.a);
  console.log(child.value?.b);
});
</script>

<template>
  <Child ref="child" />
</template>
