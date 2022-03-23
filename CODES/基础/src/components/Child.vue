<!--
 * @Author: Lee
 * @Date: 2022-01-05 19:43:26
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-06 19:47:48
-->

<!-- child.vue -->
<!-- <script setup lang="ts">
// -- 声明属性类型（TS）
interface IProps {
  name: string;
  age: number;
  job?: string;
}
// -- 定义属性
const props = withDefaults(defineProps<IProps>(), {
  name: 'Muzili',
  age: 18,
  job: '未知',
});
console.log(props);

// -- 定义事件
const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();
</script>

<template>
  <div>{{ name }} - {{ age }} - {{ job }}</div>
    <button type="button" @click="emit('change', 1)">触发[change]事件</button>
    <button type="button" @click="emit('update', 'Hello')">触发[update]事件</button>
</template> -->

<!-- 子组件 -->
<!-- <script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div>
    <span>子组件：{{ modelValue }}</span>
    <button
      style="margin-left: 10px"
      type="button"
      @click="emit('update:modelValue', 'Hello, world!')"
    >
      修改msg
    </button>
  </div>
</template> -->

<!-- defineExpose -->
<!-- <script setup lang="ts">
import { useAttrs } from 'vue';
// -- 变量
const name = 'Li-HONGYAO';
// -- 方法
const sayHello = (name: string) => {
  console.log(`Hello, ${name}!`);
};

// -- 定义子子组件暴露出去的属性的类型声明
export interface ExposeProps {
  name: string;
  sayHello: (name: string) => void;
}
console.log(useAttrs());

// -- 将变量 name 和方法 sayHello 暴露给父组件
// -- 父组件可通过 ref 访问
defineExpose({
  name,
  sayHello,
});
</script>

<template></template> -->

<!-- 生命周期 -->

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    msg: String,
  },
  beforeCreate() {
    console.log('子：__beforeCreate__');
  },
  created() {
    console.log('子：__created__');
  },
  beforeMount() {
    console.log('子：__beforeMount__');
  },
  mounted() {
    console.log('子：__mounted__');
  },
  beforeUpdate() {
    console.log('子：__beforeUpdate__');
  },
  updated() {
    console.log('子：__updated__');
  },
  beforeUnmount() {
    console.log('子：__beforeUnmount__');
  },
  unmounted() {
    console.log('子：__unmounted__');
  },
});
</script>

<template>
  <div>This is Child Component.</div>
  <p>msg：{{ msg }}</p>
</template>
