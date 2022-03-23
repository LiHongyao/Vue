<!--
 * @Author: Lee
 * @Date: 2022-01-06 15:34:09
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-06 18:48:29
-->

<!-- <template>
  <div>
    <b>Name：</b>
    <slot name="name"></slot>
  </div>
  <div>
    <b>Gender：</b>
    <slot></slot>
  </div>
  <div>
    <b>job：</b>
    <slot name="job"></slot>
  </div>
  <hr color="red" />
</template> -->

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  name: 'Li-HONGYAO',
  job: 'Senior Front-End Developer',
});



</script>

<template>
  <!-- 通过属性将state数据传递出去 -->
  <slot :scope="state" />
</template>
