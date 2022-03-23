<!--
 * @Author: Lee
 * @Date: 2022-01-07 10:14:04
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-07 10:48:41
-->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'component-name' /** 组件名 */,
  setup() {
    console.log('__setup__');
  },
  beforeCreate() {
    console.log('__before__');
  },
  mixins: [] /** 混合（复用组件功能） */,
  props: {} /** 属性（父组件调用时传入） */,
  data() {
    return {};
  } /** 组件内响应式数据，必须是一个函数，且返回一个对象*/,
  computed: {} /** 计算属性 */,
  methods: {} /** 方法 */,
  watch: {} /** 监听器 */,
  emits: [] /** 自定义事件 */,
});
</script>

<template></template>