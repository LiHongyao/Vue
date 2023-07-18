<!--
 * @Author: Lee
 * @Date: 2023-06-11 17:04:30
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 10:41:38
 * @Description: 
-->

<script setup lang="ts">
// -- imports
import { ref, onMounted } from 'vue';
import ButtonCounter from './ButtonCounter.vue';
import Parent from './Parent.vue';
import Expose from './Expose.vue';
import VModel from './VModel.vue';
import Link from './Slots.vue';
import { provide } from 'vue';
import { APP_KEY } from './keys';
import Layout from './Layout.vue';
import Dynamic from './Dynamic/index.vue';
provide(APP_KEY, {
  env: 'development',
  appID: 'xxx',
});

// -- refs
const childRef = ref<InstanceType<typeof Expose> | null>(null);
const text = ref('');

// -- life circles
onMounted(() => {
  // 访问子组件属性：name
  console.log(childRef.value?.name); // Li-HONGYAO
  // 调用子组件方法：sayHello
  childRef.value?.sayHello('Li-HONGYAO'); // Hello, Li-HONGYAO!
});
</script>

<template>
  <ButtonCounter />
  <Parent />
  <Expose ref="childRef" />
  <div>
    <VModel v-model.capitalize="text" />
    <p>text: {{ text }}</p>
  </div>
  <div class="slots">
    <Link to="/login">sign in</Link>
    &nbsp;
    <Link to="/register">sign up</Link>
  </div>

  <Layout>
    <span>male</span>
    <template #name>Li-HONGYAO</template>
    <template v-slot:job>Senior Front-End Developer</template>
  </Layout>

  <Dynamic />
</template>
