<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-20 14:54:53
 * @LastEditTime: 2021-04-20 15:48:30
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: \test-app\src\components\ListRendering.vue
-->

<template>
  <div id="_app">
    <!-- 迭代数组 -->
    <ol>
      <li v-for="(hero, index) in heros" :key="index">
        <h3>{{ hero.name }}</h3>
      </li>
    </ol>
    <!-- 迭代对象 -->
    <div v-for="(value, key, index) in hero" :key="key">
      {{ index }} . {{ key }} . {{ value }}
    </div>
    <!-- 迭代整数 -->
    <div v-for="value in 3" :key="value">{{ value }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      hero: {
        name: "露娜",
        position: "战士/法师",
        specialSkil: "突进/收割",
        skill: "月光之舞、玄月斩、炙热剑芒、新月突击",
      },
      heros: [
        { name: "张良" },
        { name: "露娜" },
        { name: "妲己" },
        { name: "甄姬" },
        { name: "虞姬" },
      ],
    };
  },
});
</script>
