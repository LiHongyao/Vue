/*
 * @Author: Lee
 * @Date: 2023-06-07 10:00:35
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-14 15:00:23
 * @Description:
 */

import { ArrayMethods } from './arr';

export function observer(data) {
  // 判断：data不是对象或不存在，直接返回
  if (typeof data !== 'object' || data === null) {
    return data;
  }
  // data为对象时，进行数据劫持
  return new Observer(data);
}

class Observer {
  constructor(value) {
    // 给value定义一个属性，在数组劫持（push/unshift/splice）时访问
    Object.defineProperty(value, '__ob__', {
      enumerable: false,
      value: this,
    });
    if (Array.isArray(value)) {
      // -- data如果是数组，则通过重写数组函数劫持
      value.__proto__ = ArrayMethods;
      // -- 数组对象的处理，如[{a:1}]，对对象元素{a:1}进行劫持
      this.observeArray(value);
    } else {
      // -- data如果是对象，则通过遍历对象属性劫持
      this.walk(value);
    }
  }
  /**
   * 由于Object.defineProperty只对单个属性设置
   * 所以需要遍历数据对对象中的属性单独进行劫持
   * @param {*} data
   */
  walk(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
  observeArray(value) {
    for (let i = 0; i < value.length; i++) {
      observer(value[i]);
    }
  }
}

/**
 * 数据劫持
 * @param {*} data
 * @param {*} key
 * @param {*} value
 */
function defineReactive(data, key, value) {
  observer(value); // 深度劫持
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      // 新值劫持
      observer(newValue);
      // 设置新值
      // value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的
      value = newValue;
    },
  });
}

/**
 * 对象劫持：{a: 1, b: 2, obj: {} }
 * 方法：Object.defineProperty
 * 该方法有缺陷，只能对对象中的一个属性进行劫持，所以需要遍历/递归进行劫持
 * 1. 遍历对象，只能劫持第1层
 * 2. 递归，深层劫持/新值劫持（set)
 */

/**
 * 数组劫持：{list: [1, 2, 3], arr: [{a:1}]}
 * 方法：通过函数劫持，劫持数组方法
 */
