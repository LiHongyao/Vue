/*
 * @Author: Lee
 * @Date: 2022-03-21 17:57:30
 * @LastEditors: Lee
 * @LastEditTime: 2022-03-21 17:57:30
 */

// -- 触发更新视图
function updateView() {
  console.log('视图更新');
}

// ++++++++++++++++++++++
// -- 重新定义数组原型
var __proto__;
(function () {
  const oldArrayProperty = Array.prototype;
  // 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
  __proto__ = Object.create(oldArrayProperty);
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((methodName) => {
    __proto__[methodName] = function () {
      updateView(); // 触发视图更新
      oldArrayProperty[methodName].call(this, ...arguments);
    };
  });
})();
// ++++++++++++++++++++++

// -- 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observer(value);

  // 核心API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue);
        // 设置新值（注意：value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值）
        value = newValue;
        // 触发更新视图
        updateView();
      }
    },
  });
}

// -- 监听对象属性
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    // 监听的不是对象或数组时，直接返回
    return target;
  }
  // ++++++++++++++++++++++
  if (Array.isArray(target)) {
    target.__proto__ = __proto__;
  }
  // ++++++++++++++++++++++

  // 重新定义各个属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}

// -- 准备数据
const data = {
  name: 'Li-HONGYAO',
  address: '成都市武侯区',
  info: {
    age: 28,
  },
  nums: [1, 2, 3],
};

// -- 监听数据
observer(data);

// -- 修改数据
data.nums.push(4);

data.name = '李鴻耀同學';
data.address = '成都市高新区';
data.info.age = 30;

console.log(data.nums[1]);
