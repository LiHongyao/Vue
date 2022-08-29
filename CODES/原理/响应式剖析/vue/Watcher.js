/*
 * @Author: Lee
 * @Date: 2022-03-18 15:55:32
 * @LastEditors: Lee
 * @LastEditTime: 2022-03-18 15:59:34
 */

/**
 * 观察者类
 * 观察数据的变更，调用data中对应属性的get方法触发依赖收集，并在数据变更后执行相应的更新。
 */
let uid = 0;
export default class Watcher {
  // vm：即一个Vue对象
  // key：要观察的属性
  // cb：是观测到数据变化后需要做的操作，通常是指DOM变更
  constructor(vm, key, cb) {
    this.vm = vm;
    this.uid = uid++;
    this.cb = cb;
    // 调用get触发依赖收集之前，把自身赋值给Dep.taget静态变量
    Dep.target = this;
    // 触发对象上代理的get方法，执行get添加依赖
    this.value = vm.$data[key];
    // 用完即清空
    Dep.target = null;
  }
  // 在调用set触发Dep的notify时要执行的update函数，用于响应数据变化执行run函数即dom变更
  update(newValue) {
    //值发生变化才变更
    if (this.value !== newValue) {
      this.value = newValue;
      this.run();
    }
  }
  // 执行DOM更新等操作
  run() {
    this.cb(this.value);
  }
}
