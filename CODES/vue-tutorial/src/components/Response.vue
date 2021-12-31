<!--
 * @Author: Lee
 * @Date: 2021-12-31 15:35:43
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-31 16:24:42
-->
<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';
// -- 定义变量
let count = ref(0);

let obj = reactive({
  count: 0,
});

const state = reactive({
  loginStatus: 0,
  user: {
    name: 'Li-HONGYAO',
    job: '前端工程师',
    address: '成都市高新区',
  },
});

/*
const state = reactive({
  name: 'Li-HONGYAO',
  age: 18,
});
const stateAsRefs = toRefs(state);*/
/**
stateAsRefs 的类型:
{
  name: Ref<string>,
  age: Ref<number>
}*/
/*
// ref 和原始 property 已经“链接”起来了
state.age++;
console.log(stateAsRefs.age.value); // 19

stateAsRefs.age.value++;
console.log(state.age); // 20*/

// -- 事件处理函数
const increment = () => {
  count.value++;
  obj.count++;
};

const { loginStatus, user } = toRefs(state);
</script>

<template>
  <!-- 绑定数据 -->
  <div>count：{{ count }}</div>
  <div>obj.count：{{ obj.count }}</div>
  <button type="button" @click="increment">increment</button>
  <div>loginStatus：{{ state.loginStatus ? '已登录' : '未登录' }}</div>
  <div>Name：{{ state.user.name }}</div>
  <div>job：{{ state.user.job }}</div>
  <div>address：{{ state.user.job }}</div>
  <hr />
</template>
