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
  padding-left: 10px;
  align-items: center;
  background: #a9a9a9;
  color: #ffffff;
  margin-bottom: 10px;
  border-radius: 4px;
}
</style>
