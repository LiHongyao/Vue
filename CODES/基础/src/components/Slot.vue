<!--
 * @Author: Lee
 * @Date: 2022-01-06 14:49:21
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-06 16:30:53
-->

<!-- <script setup lang="ts">
import NavigationLink from './NavigationLink.vue';
</script>

<template>
  <navigation-link url="/login">
    → Property "url" was accessed during render but is not defined on instance. 
    <span>Clicking here will send you to: {{ url }}</span>
  </navigation-link>
 
</template> -->

<!-- 
<script setup lang="ts">
import Layout from './Layout.vue';
</script>

<template>
  <Layout>
    <span>male</span>
    <template #name>Li-HONGYAO</template>
    <template #job>Senior Front-End Developer</template>
  </Layout>
</template> -->

<script setup lang="ts">
import Layout from './Layout.vue';
</script>

<template>
  <Layout>
    <template #default="{ scope: { name, job } }">
      <!-- name -->
      <div>
        <b>Name：</b>
        <span>{{ name }}</span>
      </div>
      <!-- job -->
      <div>
        <b>Job：</b>
        <span>{{ job }}</span>
      </div>
      <hr color="red" />
    </template>
  </Layout>
</template>
