<!--
 * @Author: Lee
 * @Date: 2022-01-10 10:32:41
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-10 15:45:56
-->

<script setup lang="ts">
import { useRouter } from 'vue-router';

// → 获取router实例
const router = useRouter();

// → 在事件函数中调用
const onGoNews = () => {
  router.push({ name: 'news', params: { id: 1 } });
};
</script>
<template>
  <div class="page">
    <p>This is Home page.</p>
    <button type="button" @click="onGoNews">Go News</button>
    <!-- 直接在模板中获取router实例 -->
    <button type="button" @click="$router.push('/news/2')">Go News</button>
  </div>
</template>
