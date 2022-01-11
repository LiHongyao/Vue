<!--
 * @Author: Lee
 * @Date: 2022-01-10 11:12:50
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-11 14:10:45
-->
<script setup lang="ts">
import {} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../../store';
const route = useRoute();
// 1. 脚本中访问
// console.log(route.query); // → {name: 'muzili', course: 'web'}
const store = useStore();
</script>

<template>
  <div class="page">
    <p>This is HTML page.</p>
    <p>count：{{ store.state.count }}</p>
    <!-- 2. 模板中访问 -->
    <p>{{ $route.query.name }} - {{ $route.query.course }}</p>
  </div>
</template>
