<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-22 21:45:50
 * @LastEditTime: 2021-04-22 22:25:34
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /基础/src/components/Comp.vue
-->


<template>
  <!-- 调用子组件 -->
  <!-- name - 静态传递数据 -->
  <!-- age  - 动态传递数据 -->
  <child name="Muizli" :age="28" @custom-event="onTap" />
  <!-- 动态组件 -->
  <dynamic-comp />
</template>

<script>
// 引入子组件
import Child from "./Child.vue";
import DynamicComp from "./DynamicComp.vue";
export default {
  setup(props) {
    console.log(props);
    const onTap = (data) => {
      console.log(data);
    };
    return {
      onTap,
    };
  },
  // 注册子组件
  components: {
    Child,
    DynamicComp,
  },
};
</script>

<style scoped></style>