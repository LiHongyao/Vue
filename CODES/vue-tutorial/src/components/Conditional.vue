<!--
 * @Author: Lee
 * @Date: 2021-12-31 17:56:26
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-31 18:29:02
-->

<script setup lang="ts">
import { ref } from 'vue';
const age = 20;
const score = 98;

const isTel = ref(false);
</script>

<template>

  <p v-if="true">Hello, vue3.x!</p>
  <p v-if="false">Hello, girl!</p>
  <p v-if="age > 18">欢迎来到王者联盟~</p>

  <template v-if="true">
    <div>Name: Li-HONGYAO</div>
    <div>Job：Front End engineer</div>
    <div>Age：30</div>
  </template>

  <div v-if="Math.random() > 0.5">茫茫人海中，你竟然能和我相遇</div>
  <div v-else>懒得理你</div>
  <!-- v-else if- else -->
  <p v-if="score >= 90 && score <= 100">优秀</p>
  <p v-else-if="score >= 70 && score < 90">良好</p>
  <p v-else-if="score >= 60 && score < 70">及格</p>
  <p v-else-if="score >= 0 && score < 60">不及格</p>
  <p v-else>成绩有误！</p>
</template>
