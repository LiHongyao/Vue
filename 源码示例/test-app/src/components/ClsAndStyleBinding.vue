<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-21 17:50:40
 * @LastEditTime: 2021-04-21 18:27:19
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: \test-app\src\components\ClsAndStyleBinding.vue
-->

<template>
  <!-- 绑定class -->
  <!-- 变量绑定 -->
  <div :class="clsName"></div>
  <!-- 对象绑定 -->
  <div :class="{ active: isActive, error: hasError }"></div>
  <div :class="clsObj"></div>
  <!-- 数组绑定 -->
  <div :class="[activeCls, errorCls]"></div>
  <!-- 表达式绑定 -->
  <div :class="isActive ? 'active' : 'no-active'"></div>

  <!-- 绑定内联样式 -->
  <!-- 对象绑定 -->
  <div :style="{ color }">Hello, Vue3.x!</div>
  <div :style="styleObj">Hello, Vue3.x!</div>
  <!-- 数组绑定 -->
  <div :style="[styleObj, baseStyle]">Hello, Vue3.x!</div>
</template>


<script>
export default {
  setup() {
    return {
      isActive: false,
      hasError: true,
      clsName: "wrap",
      clsObj: {
        wrap: true,
        bar: false,
        foo: true,
      },
      activeCls: "active",
      errorCls: "text-danger",
      color: "blue",
      styleObj: {
        color: "orange",
      },
      baseStyle: {
        letterSpacing: "2px",
      },
    };
  },
};
</script>