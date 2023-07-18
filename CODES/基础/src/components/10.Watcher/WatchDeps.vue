<!--
 * @Author: Lee
 * @Date: 2023-06-11 16:19:44
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-11 16:22:17
 * @Description: 
-->
<script setup lang="ts">
// -- imports
import { reactive, watch } from 'vue';

// -- state
interface IState {
  name: string;
  cp: {
    name: string;
  };
}
const state = reactive<IState>({
  name: '张三',
  cp: {
    name: '李四',
  },
});

// 监听 reactive 定义的响应式数据
// 特点1：newVal === oldVal，地址引用
// 特点2：reactive() 对象默认是深度监听，能监听到所有的子属性的变化
// 注意点： 如果监听的属性值是基本类型数据，需要写成函数返回该属性的方式才能监听到

watch(
  () => state.cp,
  (val) => {
    console.log('小象找到CP了要发红包', val);
  },
  { deep: true, immediate: true }
);
</script>
