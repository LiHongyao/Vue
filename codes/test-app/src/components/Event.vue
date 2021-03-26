<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-07 01:08:36
 * @LastEditTime: 2021-03-07 01:12:27
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /test-app/src/components/Event.vue
-->
<template>
  <div class="event">
    <button type="button" @click="handler1('Li-HONGYAO')">BUTTON 1</button>
    <button type="button" @click="handler2">BUTTON 2</button>
    <button type="button" @click="handler3($event, '前端工程师')">BUTTON 3</button>
    <button type="button" @click="handler4(1), handler5(2)">BUTTON 4</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'event',
  methods: {
     handler1(name: string) {
      alert(`Hello, ${name}!`);
    },
    handler2(){
      console.log('Button Click!');
    },
    handler3(event: MouseEvent, job: string) {
      console.log(event, job);
    },
    handler4() {
      console.log('__handler4__');
    },
    handler5() {
      console.log('__handler5__');
    }
  }
})
</script>