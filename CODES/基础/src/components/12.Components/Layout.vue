<!--
 * @Author: Lee
 * @Date: 2023-06-13 09:34:00
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 09:35:42
 * @Description: 
-->

<script setup lang="ts"></script>

<template>
  <div>
    <b>Name：</b>
    <!-- 具名插槽：name -->
    <slot name="name"></slot>
  </div>
  <div>
    <b>Gender：</b>
    <!-- 默认插槽：default -->
    <slot></slot>
  </div>
  <div>
    <b>job：</b>
    <!-- 具名插槽：job -->
    <slot name="job"></slot>
  </div>
  <hr color="red" />
</template>
