<!--
 * @Author: Lee
 * @Date: 2022-01-05 19:49:22
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-06 20:12:41
-->

<!-- parent.vue -->
<!-- <script setup lang="ts">
// -- 引入子组件
import Child from './Child.vue';

// -- 监听子组件[change]事件
const onChange = (id: number) => {
  console.log(id);
};
// -- 监听子组件[update]事件
const onUpdate = (value: string) => {
  console.log(value);
};
</script>

<template>
  <Child name="Li-HONGYAO" :age="28" @change="onChange" @update="onUpdate" />
</template> -->

<!-- v-mode -->
<!-- 父组件 -->
<!-- <script setup lang="ts">
import { ref } from 'vue';
import Child from './Child.vue';

const msg = ref('Hello, vue.js!');
</script>

<template>
  <Child v-model="msg" />
  <div>父组件：{{ msg }}</div>
</template> -->

<!-- v-mode:count -->
<!-- <script setup lang="ts">
import { ref } from 'vue';
import Counter from './Counter.vue';
const count = ref(1);
</script>

<template>
  <Counter v-model:count="count" />
  <p>父组件：商品数量 → {{ count }}</p>
</template> -->

<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue';
import Child, { ExposeProps } from './Child.vue';

const childRef = ref<ExposeProps>();

onMounted(() => {
  // 访问子组件属性：name
  console.log(childRef.value?.name); // Li-HONGYAO
  // 调用子组件方法：sayHello
  childRef.value?.sayHello('Li-HONGYAO'); // Hello, Li-HONGYAO!
});
</script>

<template>
  <Child ref="childRef" />
</template> -->

<!-- 生命周期 -->

<script lang="ts">
import { defineComponent } from 'vue';
import Child from './Child.vue';
export default defineComponent({
  components: {
    Child,
  },
  data() {
    return {
      msg: 'Hello, vue!',
    };
  },
  beforeCreate() {
    console.log('父：__beforeCreate__');
  },
  created() {
    console.log('父：__created__');
  },
  beforeMount() {
    console.log('父：__beforeMount__');
  },
  mounted() {
    console.log('父：__mounted__');
  },
  beforeUpdate() {
    console.log('父：__beforeUpdate__');
  },
  updated() {
    console.log('父：__updated__');
  },
  beforeUnmount() {
    console.log('父：__beforeUnmount__');
  },
  unmounted() {
    console.log('父：__unmounted__');
  },
});
</script>

<template>
  <Child :msg="msg" />
  <button type="button" style="cursor: pointer;" @click="msg = 'Hello, world!'">更新属性：msg</button>
</template>
