/*
 * @Author: Lee
 * @Date: 2022-03-22 14:15:35
 * @LastEditors: Lee
 * @LastEditTime: 2022-03-22 15:44:50
 */

class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);
    if (this.$el) {
      // -- 将$el所有子节点移动到fragment中
      this.$fragment = this.nodeToFragment(this.$el);
      // -- 编译 fragment
      this.compileElement(this.$fragment);
      // -- 将编译好的fragment插入到el中
      this.$el.appendChild(this.$fragment);
    }
  }
  nodeToFragment(el) {
    // 1. 创建 fragment 对象
    var fragment = document.createDocumentFragment();
    var child;
    // 2. 将原生节点移动到fragment中
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }
    // 3. 返回 fragment
    return fragment;
  }
  compileElement(el) {
    var _this = this;
    var childNodes = el.childNodes;
    Array.prototype.slice.call(childNodes).forEach((node) => {
      // 创建匹配{{}}格式的正则
      // 禁止贪婪{{xxx}}--{{bbb}} → xxx 和 bbb（会匹配到2个）
      // 如果不禁止贪婪 就会变成{{xxx}}--{{bbb}} → xxx}}--{{bbb
      var reg = /\{\{(.*?)\}\}/;
      // 使用循环将此节点的所有{{xxx}}依次替换成vm.$data对应的值
      while (node.nodeType === 3 && reg.test(node.textContent)) {
        // 获取{{}}中变量在vm.$data中对应的值
        var val = _this.getData(
          _this.$vm,
          reg.exec(node.textContent)[1].trim()
        );
        // 获取原始的值
        var oldVal = node.textContent;
        // 用vm.$data中对应的值将{{xxx}}替换掉
        node.textContent = oldVal.replace(reg, val);
      }
      // 如果该节点存在 且 有子节点 则调用递归 编译此节点
      if (node.childNodes && node.childNodes.length) {
        _this.compileElement(node);
      }
    });
  }
  // -- 获取变量在vm.data中对应的值
  getData(vm, exp) {
    var val = vm.$data;
    exp.split('.').forEach((k) => {
      val = val[k];
    });
    return val;
  }
}

class Vue {
  constructor(options) {
    // --  初始值
    this.$options = options || {};
    this.$data = options.data;
    // -- 调用编译函数
    new Compile(options.el, this);
  }
}
