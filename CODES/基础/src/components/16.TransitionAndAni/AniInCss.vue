<script setup lang="ts">
// -- imports
import { ref } from 'vue';
// -- refs
const ani = ref(false);
</script>
<template>
  <div class="box" :class="{ ani }"></div>
  <button type="button" @click="ani = !ani">启用动画</button>
</template>

<style scoped>
@keyframes ani {
  to {
    transform: translateX(300px);
    background-color: blue;
  }
}
.box {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  background-color: red;
}
.ani {
  animation: ani 2s linear 1 forwards;
}
</style>
