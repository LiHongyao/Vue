<!--
 * @Author: Lee
 * @Date: 2022-01-10 13:35:09
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-10 17:37:57
-->
<script setup lang="ts"></script>
<template>
  <div class="page">
    <p>This is Web page.</p>
    <nav>
      <router-link to="/web/html">Html</router-link>
      <span> / </span>
      <router-link to="/web/css">css</router-link>
      <span> / </span>
      <router-link to="/web/js">JavaScript</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
