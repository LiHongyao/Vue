<script setup lang="ts">
// -- imports
import { ref } from 'vue';
// -- refs
let count = ref<number>(0);

// -- events
const onIncrement = () => {
  count.value++;
};
</script>

<template>
  <button type="button" @click="onIncrement">{{ count }}</button>
</template>
