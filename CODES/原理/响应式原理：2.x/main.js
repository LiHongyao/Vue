/*
 * @Author: Lee
 * @Date: 2022-03-21 12:45:51
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-06 19:08:41
 */

import Vue from './vue/index.js';

const vm = new Vue({
  $el: 'app',
  data() {
    return {
      name: '张三',
    };
  },
});

console.log(vm);
