<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-22 22:03:47
 * @LastEditTime: 2021-04-22 22:16:39
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /基础/src/components/Child.vue
-->


<template>
  <!-- 访问属性 -->
  <div>{{ name }} - {{ age }}</div>
  <button @click="$emit('custom-event', 'Hello, Comp!')">Send Msg.</button>
</template>

<script>
export default {
  // 简单接收属性
  emits: ["custom-event"],
  props: {
    name: String,
    age: Number,
  },
  setup(props, ctx) {
    // 访问属性
    console.log(props.name);
    console.log(props.age);
    console.log(ctx);
  },
  components: {},
};
</script>

<style scoped></style>