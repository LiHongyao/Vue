<script setup lang="ts">
// -- imports
import { ref } from 'vue';
// -- refs
const checkVal = ref('');
</script>

<template>
  <form action="" name="myForm">
    <label>性别：</label>

    <label>男</label>
    <input type="radio" value="男" v-model="checkVal" />

    <label>女</label>
    <input type="radio" value="女" v-model="checkVal" />

    <label>保密</label>
    <input type="radio" value="保密" v-model="checkVal" />

    <p>您的选择是：{{ checkVal }}</p>
  </form>
</template>
