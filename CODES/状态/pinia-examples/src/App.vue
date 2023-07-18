<script setup lang="ts">
import { useAppStore } from './stores';
const store = useAppStore();
</script>

<template>
  <button @click="store.increment()">{{ store.count }}</button>
</template>
