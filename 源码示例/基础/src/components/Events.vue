<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-20 15:50:49
 * @LastEditTime: 2021-04-20 15:59:09
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: \test-app\src\components\Events.vue
-->

<template>
  <div class="events">
    <!-- 通过内联脚本处理事件 -->
    <button type="button" @click="handler1('Li-HONGYAO')">BUTTON 1</button>
    <!-- 通过监听函数处理事件 -->
    <button type="button" @click="handler2">BUTTON 2</button>
    <button type="button" @click="handler3($event, '前端工程师')">BUTTON 3</button>
    <button type="button" @click="handler4(), handler5()">BUTTON 4</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Events",
  setup() {
    // events
    const handler1 = (name) => {
      alert(`Hello, ${name}!`);
    };
    const handler2 = () => {
      console.log("Button Click!");
    };
    const handler3 = (event, job) => {
      console.log(event, job);
    };
    const handler4 = () => {
      console.log("__handler4__");
    };
    const handler5 = () => {
      console.log("__handler5__");
    };
    return {
      handler1,
      handler2,
      handler3,
      handler4,
      handler5,
    };
  },
});
</script>
