<script setup lang="ts">
// -- imports
import { ref } from 'vue';
// -- refs
const msg1 = ref('');
const msg2 = ref('');
</script>

<template>
  <form>
    <div class="demo-1">
      <p>input：</p>
      <input type="text" v-model="msg1" placeholder="请输入内容" />
      <p>您输入的内容是：{{ msg1 }}</p>
    </div>
    <hr />
    <div class="demo-2">
      <p>textarea：</p>
      <textarea type="text" v-model="msg2" placeholder="请输入内容"></textarea>
      <p>您输入的内容是：{{ msg2 }}</p>
    </div>
  </form>
</template>
