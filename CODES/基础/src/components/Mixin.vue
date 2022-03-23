<!--
 * @Author: Lee
 * @Date: 2022-01-07 11:11:04
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-07 11:25:11
-->

<script lang="ts">
import { defineComponent } from 'vue';

// -- create mixin
const myMixin = {
  methods: {
    showJob() {
      console.log('Senior Front-End Developer.');
    },
    sayHello() {
      console.log('Hello, girl.');
    },
  },
};

export default defineComponent({
  mixins: [myMixin],
  methods: {
    showEmail() {
      console.log('lihy_online@163.com');
    },
    sayHello() {
      console.log('Hello, boy.');
    },
  },
  created() {
    this.showJob();
    this.showEmail();
    this.sayHello();
  },
});

// => "mixin 对象的钩子被调用"
// => "组件钩子被调用"
</script>

<template>
  <div>Hello，Mixins！</div>
</template>
