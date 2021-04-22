<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-04-20 16:53:46
 * @LastEditTime: 2021-04-20 17:16:03
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: \test-app\src\components\Computed.vue
-->

<template>
  <div class="computed">
    <h3>原始字符串： {{ message }}</h3>
    <h3>逆序字符串： {{ reverseMessage }}</h3>

    <input type="text" v-model="idCard" placeholder="请输入您的身份证号" />
    <p>出生日期：{{ getBirth }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Computed",
  setup() {
    // refs
    const message = ref("江山如此多娇，引无数英雄竞折腰");
    const idCard = ref("");
    const count = ref(1);
    // computed
    const reverseMessage = computed(() => {
      return message.value
        .split("")
        .reverse()
        .join("");
    });
    const getBirth = computed(() => {
      if (idCard.value.length !== 18 || isNaN(Number(idCard.value))) {
        return "";
      }
      let t = idCard.value;
      let year = t.slice(6, 10);
      let month = t.slice(10, 12);
      let day = t.slice(12, 14);
      return `${year}年${month}月${day}日`;
    });
    const plusOne = computed({
      set: (v) => {
        console.log(v);
        count.value = v - 1;
      },
      get: () => {
        return count.value + 1;
      },
    });

    plusOne.value = 10;
    console.log(plusOne.value);

    return {
      idCard,
      message,
      getBirth,
      reverseMessage,
    };
  },
};
</script>
