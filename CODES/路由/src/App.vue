<!--
 * @Author: Lee
 * @Date: 2022-01-10 10:26:40
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-11 11:27:07
-->
<script setup lang="ts"></script>

<template>
  <!-- 导航 -->
  <nav>
    <router-link to="/home">Home</router-link>
    <span> / </span>
    <router-link to="/news">News</router-link>
    <span> / </span>
    <router-link to="/web">Web</router-link>
  </nav>

  <router-view></router-view>

  <!-- 路由视图 -->
  <!-- <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__fadeIn "
      leave-active-class="animate__animated animate__fadeOut"
    >
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>

<style>
.router-link-active {
  color: blue;
}
</style>
