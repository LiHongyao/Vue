<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-20 17:51:33
 * @LastEditTime: 2021-04-20 17:55:31
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: \test-app\src\components\WatchEffect.vue
-->

<template>
  <div></div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    // refs
    const page = ref(1);
    const pageSize = ref(10);
    // effects
    watchEffect(() => {
      console.log(`请求数据 -> 页码：${page.value}，每页条数：${pageSize.value}`);
    });
    // 模拟修改数据
    setTimeout(() => {
      page.value = 10;
    }, 1000);
  },
};
</script>
