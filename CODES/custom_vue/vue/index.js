/*
 * @Author: Lee
 * @Date: 2022-03-18 15:35:45
 * @LastEditors: Lee
 * @LastEditTime: 2022-03-18 16:28:00
 */

import Observe from './Observe.js';

class Vue {
  constructor(options) {
    this.$el = options.$el;
    this.$data = options.data;
    // -- 对data进行响应式处理
    new Observe(this.$data);
  }
}

export default Vue;
