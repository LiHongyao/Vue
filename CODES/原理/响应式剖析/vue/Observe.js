/*
 * @Author: Lee
 * @Date: 2022-03-18 15:49:17
 * @LastEditors: Lee
 * @LastEditTime: 2022-08-29 11:20:30
 */

import Dep from './Dep.js';

export default class Observe {
  constructor(data) {
    if (typeof data === 'object') {
      this.traverse(data);
    }
  }
  // -- 遍历对象属性，依次对其进行响应式处理
  traverse(obj) {
    const keys = Object.keys(obj);
    keys.map((key) => {
      // -- 对所有属性进行监听（数据劫持）
      this.defineReactive(obj, key);
    });
  }
  defineReactive(obj, key) {
    if (typeof obj[key] === 'object') {
      // -- 如果属性是对象，则递归调用 traverse 方法
      this.traverse(obj[key]);
    }
    const dep = new Dep();
    const val = obj[key];
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      // -- get代理将Dep.target即Watcher对象添加到依赖集合中
      get() {
        //这里在创建Watcher对象时会给Dep.target赋值
        if (Dep.target) {
          dep.addSubs(Dep.target);
        }
        return val;
      },
      set(newVal) {
        val = newVal;
        //依赖的变更响应
        dep.notify(newVal);
      },
    });
  }
}
