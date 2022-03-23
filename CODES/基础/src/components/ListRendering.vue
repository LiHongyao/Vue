<!--
 * @Author: Lee
 * @Date: 2021-12-31 18:29:51
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 10:09:37
-->

<!-- <script setup lang="ts">
import { reactive, ref } from 'vue';

const refs = ref<HTMLLIElement[]>([]);

const heros = reactive([
  { name: '张良' },
  { name: '露娜' },
  { name: '妲己' },
  { name: '甄姬' },
  { name: '虞姬' },
]);

const user = reactive({
  name: 'Li-HONGYAO',
  job: '前端工程师',
});

setTimeout(() => {
  heros.push({ name: '哪吒' });
}, 1000);

const pushDom = (el: any) => {
  refs.value.push(el as HTMLLIElement);
};
</script>

<template>
  <ul>
    <li v-for="(item, index) in 5" :key="index">
      index：{{ index }} -- item：{{ item }}
    </li>
  </ul>
  <ul>
    <li v-for="(item, index) in heros" :key="index" :ref="pushDom">
      {{ item.name }}
    </li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in user" :key="index">
      {{ key }}：{{ value }}({{ index }})
    </li>
  </ul>
</template> -->

<script setup lang="ts">
import { reactive, ref } from 'vue';

const inputValue = ref('');
const names = reactive(['周杰伦', '王力宏', '张学友']);

const onPushItem = () => {
  if (!inputValue.value) return;
  names.push(inputValue.value);
};
</script>

<template>
  <!-- 表单 -->
  <form>
    <input
      placeholder="请输入姓名"
      v-model="inputValue"
      style="margin-right: 10px"
    />
    <button type="button" @click="onPushItem">添加</button>
  </form>
  <!-- 列表 -->
  <div class="list">
    <div class="item" v-for="(item, index) in names" :key="index">
      <span>{{ index + 1 }} → </span>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<style scoped>
form {
  margin-bottom: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.item {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a9a9a9;
  color: #ffffff;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>
