<!--
 * @Author: Lee
 * @Date: 2023-06-11 16:09:25
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 16:09:38
 * @Description: 
-->
<script setup lang="ts">
// imports
import { ref } from 'vue';
// -- refs
const heros = ref<string[]>([]);
</script>

<template>
  <form action="" name="myForm">
    <p>下列英雄角色中定位为法师的是（多选）：</p>

    <label>诸葛亮</label>
    <input type="checkbox" value="诸葛亮" v-model="heros" />

    <label>露娜</label>
    <input type="checkbox" value="露娜" v-model="heros" />

    <label>虞姬</label>
    <input type="checkbox" value="虞姬" v-model="heros" />

    <label>貂蝉</label>
    <input type="checkbox" value="貂蝉" v-model="heros" />

    <label>吕布</label>
    <input type="checkbox" value="吕布" v-model="heros" />

    <p>您的选择是：{{ heros }}</p>
  </form>
</template>
