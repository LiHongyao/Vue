/*
 * @Author: Lee
 * @Date: 2023-06-06 23:25:58
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-14 16:08:21
 * @Description:
 */
import { compileToFunction } from './compile/index.js';
import { initState } from './initState';

export function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this;
    vm.$options = options;
    // 初始化状态
    initState(vm);
    // 渲染模板
    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
  // 创建$mount
  Vue.prototype.$mount = function (el) {
    // 模板编译渲染方式有三种：
    // 1. template
    // 2. render
    // 3. el（必须要有）
    el = document.querySelector(el); // 获取元素
    const vm = this;
    const options = vm.$options;
    if (!options.render) {
      const template = options.template;
      if (!template && el) {
        // 获取到html
        el = el.outerHTML;
        // 编译成AST抽象语法树
        const ast = compileToFunction(el);
      }
    }
  };
}
