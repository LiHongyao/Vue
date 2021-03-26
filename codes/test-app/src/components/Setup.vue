<!--
 * @Author: Li-HONGYAO
 * @Date: 2021-03-07 10:09:36
 * @LastEditTime: 2021-03-11 01:44:43
 * @LastEditors: Li-HONGYAO
 * @Description: 
 * @FilePath: /test-app/src/components/Setup.vue
-->

<template>
  <!-- 标题 -->
  <div>Set-up 组件</div>
  <div>{{ name }}-{{ job }}-{{ age }}</div>
  <!-- 修改用户名称 -->
  <input type="text" placeholder="请输入用户名" v-model.lazy="username" />
  <!-- 输入18位身份证 -->
  <p><input type="text" placeholder="请输入身份证号" v-model="idCard" /></p>
  <p>{{ getBirth }}</p>
</template>

<script lang="ts">
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  Slots,
  watch,
} from "vue";

interface Data {
  [key: string]: unknown;
}
interface IProps {}
interface IContext {
  attrs: Data;
  slots: Slots;
  emit: (event: string, ...args: unknown[]) => void;
}
export default {
  name: "Setup",
  props: {
    name: { type: String, required: true },
    job: { type: String, required: true },
    age: { type: Number, required: true },
  },
  setup(props: IProps, context: IContext): Data {
    // Proxy {name: "李鸿耀", age: 28, job: "前端技术专家"}
    console.log(props);
    // state
    const idCard = ref("");
    const username = ref("");

    // methods
    // events
    const onTap = () => {
      console.log("点击");
    };

    // computed
    const getBirth = computed(() => {
      const idCarStr = idCard.value;
      if (!idCarStr || idCarStr.length !== 18) {
        return "";
      }
      const year = idCarStr.slice(6, 10);
      const month = idCarStr.slice(10, 12);
      const day = idCarStr.slice(12, 14);
      return `出生年月：${year}年${month}月${day}日`;
    });
    // watched
    watch(username, (v: string, o: string) => {
      console.log(`
        username属性值变化
        新值：${v}
        老值：${o}
      `);
    });
    // lifeCircle -- effects
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      idCard,
      username,
      onTap,
      getBirth,
    };
  },
};
</script>

<style lang="less">
</style>
