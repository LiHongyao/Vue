<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-06 18:24:22
 * @LastEditTime: 2021-03-11 01:27:10
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /test-app/src/views/Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 数据双向绑定 -->
    <div><input placeholder="请输入文本内容" v-model="value" /></div>
    <p>{{ value }}</p>
    <!-- 元素显示与隐藏 -->
    <div v-if="visible">李鸿耀</div>
    <div v-show="show">成都市</div>
    <button type="button" @click="visible = !visible">显示/影藏（姓名）</button>
    <button type="button" @click="show = !show">显示/隐藏（城市）</button>
    <!-- 列表渲染 -->
    <div class="cities">
      <section>城市：</section>
      <section class="city-item" v-for="(item, i) in cities" :key="i">
        {{ item }}
      </section>
    </div>
    <!-- 事件处理 -->
    <Event />
    <!-- setup -->
    <Setup :name="'李鸿耀'" :age="28" :job="'前端技术专家'"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Event from "@/components/Event.vue";
import Setup from "@/components/Setup.vue";
export default defineComponent({
  name: "Home",
  setup(props: any, context: any) {
    // state
    const value = ref("Hello, Li-HONGYAO");
    const visible = ref(true);
    const show = ref(true);
    const cities = reactive(["北京", "成都", "上海", "深圳", "广州"]);
    // returns
    return {
      value,
      visible,
      show,
      cities,
    };
  },
  components: {
    Event,
    Setup,
  },
});
</script>

<style lang="less" scoped>
.cities {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  .city-item {
    margin-right: 10px;
  }
}
</style>
