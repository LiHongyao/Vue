import { observer } from './observe/index.js';

/*
 * @Author: Lee
 * @Date: 2023-06-07 09:34:28
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-14 14:52:06
 * @Description:
 */
export function initState(vm) {
  let ops = vm.$options;
  // 判断
  if (ops.data) {
    initData(vm);
  }
  if (ops.props) {
    initProps(vm);
  }
  if (ops.watch) {
    initWatch(vm);
  }
  if (ops.computed) {
    initComputed(vm);
  }
  if (ops.methods) {
    initMethods(vm);
  }
}

// Vue2：对data初始化
function initData(vm) {
  let data = vm.$options.data;
  // 由于data可能是函数，所以需判断当data为函数时调用它并拿到最终的对象，调用时需绑定this到vm实例上
  data = vm.$data = typeof data === 'function' ? data.call(vm) : data;
  // 数据劫持
  observer(data);
  // 将data上的所有属性代理到实例vm上
  for (let key in data) {
    proxy(vm, '$data', key);
  }
}
function initProps() {}
function initWatch() {}
function initComputed() {}
function initMethods() {}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    },
  });
}
