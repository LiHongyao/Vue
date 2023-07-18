/*
 * @Author: Lee
 * @Date: 2023-06-07 11:24:21
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-14 15:09:13
 * @Description:
 */

// 重写数组
// 1. 获取原来的数组方法
const oldArrayProtoMethods = Array.prototype;
// 2. 继承
export const ArrayMethods = Object.create(oldArrayProtoMethods);
// 3. 劫持
const methods = ['push', 'pop', 'shift', 'unshift', 'splice'];
methods.forEach((item) => {
  ArrayMethods[item] = function (...args) {
    // -- 数组追加对象的情况
    let inserted;
    switch (item) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.splice(2);
        break;
    }
    const ob = this.__ob__;
    if (inserted) {
      ob.observeArray(inserted); // 对添加的对象进行劫持
    }
    // -- 调用数组原始方法
    return oldArrayProtoMethods[item].apply(this, args);
  };
});
