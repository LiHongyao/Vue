/*
 * @Author: Lee
 * @Date: 2022-01-07 11:42:39
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-07 14:38:05
 */

import { Ref, ref } from 'vue';

export default function useCount(a: Ref<number>, b: Ref<number>) {
  // -- 运算结果
  const result = ref(0);
  // -- 运算方法
  const plus = () => (result.value = a.value + b.value);
  const minus = () => (result.value = a.value - b.value);
  const multiply = () => (result.value = a.value * b.value);
  const divide = () => (result.value = a.value / b.value);
  // -- 返回值
  return { result, plus, minus, multiply, divide };
}
