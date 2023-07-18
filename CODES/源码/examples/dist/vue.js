(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  /**
   *
   * <div id="app"> Hello, {{msg}} <h1></h1></div>
   *
   * render() {
   *    return _c('div', { id: app, style: { ... } }, _v('hello', + _s(msg), _c))
   * }
   *
   */

  const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;

  // 处理属性
  function genProps(attrs) {
    console.log(attrs);
    let str = '';
    for (let i = 0; i < attrs.length; i++) {
      let attr = attrs[i];
      if (attr.name === 'style') {
        // {name: 'style', value: 'color:red; font-size: 12px;'}
        let obj = {};
        attr.value.split(';').forEach(item => {
          // color:red
          let [key, val] = item.split(':');
          obj[key] = val;
        });
        attr.value = obj;
      }
      // 拼接
      str += `${attr.name}:${JSON.stringify(attr.value)},`;
    }
    return `${str.slice(0, -1)}`;
  }

  // 处理子节点(1)
  function genChildren(el) {
    let children = el.children;
    if (children) {
      return children.map(child => gen(child)).join(',');
    }
  }
  function gen(node) {
    if (node.type === 1) {
      // 元素
      return generate(node);
    } else {
      // 文本 (1)普通文本 (2)插值表达式 {{}}
      let text = node.text; // 获取文本
      if (!defaultTagRE.test(text)) {
        return `_v(${JSON.stringify(text)})`;
      }
      // 带有{{}}
      let tokens = [];
      let lastIndex = defaultTagRE.lastIndex = 0;
      let match;
      while (match = defaultTagRE.exec(text)) {
        let index = match.index;
        if (index > lastIndex) {
          // 添加内容
          tokens.push(JSON.stringify(text.slice(lastIndex, index))); // 内容
        }
        // {{}}
        tokens.push(`_s(${match[1].trim()})`);
        lastIndex = index + match[0].length;
        //
        if (lastIndex < text.length) {
          tokens.push(JSON.stringify(text.slice(lastIndex)));
        }
        return `_v(${tokens.join('+')})`;
      }
    }
  }
  function generate(el) {
    // 注意：属性 {id:app, style: { color: red, ...}}
    let children = genChildren(el);
    let code = `_c(${el.tag}, ${el.attrs.length ? `${genProps(el.attrs)}` : 'null'}, ${children ? `${children}` : 'null'})`;
    console.log(code);
  }

  // 用于解析标记和属性的正则表达式(源码仓库拷贝)
  const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // 匹配属性
  const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`; // 标签名称
  const qnameCapture = `((?:${ncname}\\:)?${ncname})`; // <span:x>
  const startTagOpen = new RegExp(`^<${qnameCapture}`); // 标签开头的正则，捕获的内容是标签名
  const startTagClose = /^\s*(\/?)>/;
  const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);

  // -- 创建AST语法树
  function createASTElement(tag, attrs) {
    return {
      tag,
      // 元素
      attrs,
      // 属性
      children: [],
      // 子节点
      type: 1,
      parent: null
    };
  }
  let root; // 根元素
  let createParent; // 当前元素的父节点
  let stack = [];
  // -- 开始标签
  function start(tag, attrs) {
    // 入栈
    let element = createASTElement(tag, attrs);
    if (!root) {
      root = element;
    }
    createParent = element;
    stack.push(element);
  }
  // -- 获取文本
  function charts(text) {
    // 空格
    text = text.replace(/\s/g, '');
    if (text) {
      createParent.children.push({
        type: 3,
        text
      });
    }
  }
  // -- 结束标签
  function end(tag) {
    // 出栈
    let element = stack.pop();
    createParent = stack[stack.length - 1];
    if (createParent) {
      // 元素闭合
      element.parent = createParent.tag;
      createParent.children.push(element);
    }
  }
  function parseHTML(html) {
    // <div id="app">Hello {{msg}}</div>
    // html为空结束
    while (html) {
      const textEnd = html.indexOf('<');
      // --- 标签
      if (textEnd === 0) {
        // （1）开始标签
        const startTagMatch = parseStartTag(); // 开始标签的内容
        if (startTagMatch) {
          start(startTagMatch.tagName, startTagMatch.attrs);
          continue;
        }
        // （2）结束标签
        let endTagMatch = html.match(endTag);
        if (endTagMatch) {
          advance(endTagMatch[0].length);
          end(endTagMatch[1]);
          continue;
        }
      }
      // --- 文本
      if (textEnd > 0) {
        const text = html.slice(0, textEnd);
        if (text) {
          advance(text.length);
          charts(text);
        }
      }
    }
    function parseStartTag() {
      const start = html.match(startTagOpen); // 1. 返回结果 2. false
      if (start) {
        // 创建AST语法树
        const match = {
          tagName: start[1],
          attrs: []
        };
        // 删除开始标签
        advance(start[0].length);
        // 属性
        // 注意：多个属性，遍历
        // 注意：>，标识开始标签结束
        let attr;
        let end;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          match.attrs.push({
            name: attr[1],
            value: attr[3] || attr[4] || attr[5]
          });
          advance(attr[0].length);
        }
        if (end) {
          advance(end[0].length);
          return match;
        }
      }
    }
    function advance(n) {
      html = html.slice(n);
    }
    return root;
  }

  function compileToFunction(el) {
    // 1. 将HTML解析成AST抽象语法树
    const ast = parseHTML(el);
    // 2. 将AST语法树转成 render 函数 （1）将AST 语法树变成字符串（2）字符串变成函数
    generate(ast);
  }

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
  const ArrayMethods = Object.create(oldArrayProtoMethods);
  // 3. 劫持
  const methods = ['push', 'pop', 'shift', 'unshift', 'splice'];
  methods.forEach(item => {
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

  /*
   * @Author: Lee
   * @Date: 2023-06-07 10:00:35
   * @LastEditors: Lee
   * @LastEditTime: 2023-06-14 15:00:23
   * @Description:
   */

  function observer(data) {
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
        value: this
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
      }
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

  /*
   * @Author: Lee
   * @Date: 2023-06-07 09:34:28
   * @LastEditors: Lee
   * @LastEditTime: 2023-06-14 14:52:06
   * @Description:
   */
  function initState(vm) {
    let ops = vm.$options;
    // 判断
    if (ops.data) {
      initData(vm);
    }
    if (ops.props) ;
    if (ops.watch) ;
    if (ops.computed) ;
    if (ops.methods) ;
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
  function proxy(vm, source, key) {
    Object.defineProperty(vm, key, {
      get() {
        return vm[source][key];
      },
      set(newValue) {
        vm[source][key] = newValue;
      }
    });
  }

  /*
   * @Author: Lee
   * @Date: 2023-06-06 23:25:58
   * @LastEditors: Lee
   * @LastEditTime: 2023-06-14 16:08:21
   * @Description:
   */
  function initMixin(Vue) {
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
          compileToFunction(el);
        }
      }
    };
  }

  /*
   * @Author: Lee
   * @Date: 2023-06-06 23:04:49
   * @LastEditors: Lee
   * @LastEditTime: 2023-06-14 16:07:51
   * @Description: 
   */
  function Vue(options) {
    this._init(options);
  }
  initMixin(Vue);

  return Vue;

}));
//# sourceMappingURL=vue.js.map
