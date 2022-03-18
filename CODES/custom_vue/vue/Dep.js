/*
 * @Author: Lee
 * @Date: 2022-03-18 15:48:59
 * @LastEditors: Lee
 * @LastEditTime: 2022-03-18 15:58:49
 */

/**
 * 作用：收集依赖
 */
export default class Dep {
  static target = null;
  constructor() {
    // -- 保存依赖（这里的依赖就是观察者watcher）
    this.subs = [];
  }
  addSubs(watcher) {
    this.subs.push(watcher);
  }
  notify(newVal) {
    this.subs.forEach((sub) => {
      sub.update(newVal);
    });
  }
}
