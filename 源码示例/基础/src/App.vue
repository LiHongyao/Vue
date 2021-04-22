<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-20 11:12:36
 * @LastEditTime: 2021-04-22 22:03:36
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /基础/src/App.vue
-->

<template>
  <div>
    <div>This is Root Component.</div>
    <!-- Mustache -->
    <div>{{ msg }}</div>
    <!-- v-text -->
    <div v-text="msg"></div>
    <!-- 原始Html -->
    <div v-html="tag"></div>
    <!-- 表达式 -->
    <div>{{ isLogin ? "已登录" : "未登录" }}</div>
    <div>
      {{ text.split("").reverse().join("") }}
    </div>
    <div>{{ num + 1 }}</div>
    <!-- 属性绑定 -->
    <div :class="clsName">因为思念，所以遇见</div>
    <!-- 双向绑定 -->
    <input type="text" v-model="msg" />
    <!-- 时间绑定 -->
    <button type="button" v-on:click="onButtonClick">Tap Me.</button>
    <!-- 列表渲染 -->
    <list-rendering />
    <!-- 过滤器 -->
    <div>{{ $filters.addSymbols(30) }}</div>
    <!-- 事件 -->
    <events />
    <!-- 计算属性与方法 -->
    <computed />
    <!-- 监听器 -->
    <watch />
    <WatchEffects />
    <ClsAndStyleBinding />
    <!-- 组件交互 -->
    <comp />
  </div>
</template>

<!--
脚本文件
-->
<script>
import {
  ref,
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
import Computed from "./components/Computed.vue";
import Events from "./components/Events.vue";
import ListRendering from "./components/ListRendering.vue";
import Watch from "./components/Watch.vue";
import WatchEffects from "./components/WatchEffects.vue";
import ClsAndStyleBinding from "./components/ClsAndStyleBinding.vue";
import Comp from "./components/Comp.vue";
export default defineComponent({
  components: {
    ListRendering,
    Events,
    Computed,
    Watch,
    WatchEffects,
    ClsAndStyleBinding,
    Comp,
  },
  name: "App",
  setup() {
    // constants
    const msg = ref("Hello, Vue3.x!");
    console.log("__setup__");
    // events
    const onButtonClick = () => {
      console.log("The button tag is clicked!");
    };
    // lifecircle
    onBeforeMount(() => {
      console.log("__onBeforeMount__");
    });
    onMounted(() => {
      console.log("__onMounted__");
    });
    onBeforeUpdate(() => {
      console.log("__onBeforeUpdate__");
    });
    onUpdated(() => {
      console.log("__onUpdated__");
    });
    onBeforeUnmount(() => {
      console.log("__onBeforeUnmount__");
    });
    onUnmounted(() => {
      console.log("__onUnmounted__");
    });
    onErrorCaptured(() => {
      console.log("__onErrorCaptured__");
    });
    return {
      num: 10,
      msg,
      tag: "<b>Address：</b><span>成都市高新区</span>",
      text: "ABC",
      isLogin: false,
      clsName: "title",
      onButtonClick,
    };
  },
});
</script>
<!--
样式文件
-->
<style scoped>
.title {
  color: cornflowerblue;
}
</style>
