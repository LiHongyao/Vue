<!--
 * @Author: Lee
 * @Date: 2023-06-11 16:10:32
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 16:10:42
 * @Description: 
-->
<script setup lang="ts">
// -- imports
import { ref } from 'vue';

// -- refs
const selected = ref('');
</script>

<template>
  <form action="" name="myForm">
    <select name="mySel" v-model="selected">
      <option value="">-请选择您所在的城市-</option>
      <option value="成都">成都</option>
      <option value="上海">上海</option>
      <option value="北京">北京</option>
      <option value="深圳">深圳</option>
      <option value="杭州">杭州</option>
      <option value="昆明">昆明</option>
    </select>
  </form>
  <p>您所在的城市是：{{ selected }}</p>
</template>
