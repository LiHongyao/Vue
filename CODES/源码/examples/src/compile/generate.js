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
      attr.value.split(';').forEach((item) => {
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
    return children.map((child) => gen(child)).join(',');
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
    let lastIndex = (defaultTagRE.lastIndex = 0);
    let match;
    while ((match = defaultTagRE.exec(text))) {
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

export function generate(el) {
  // 注意：属性 {id:app, style: { color: red, ...}}
  let children = genChildren(el);

  let code = `_c(${el.tag}, ${
    el.attrs.length ? `${genProps(el.attrs)}` : 'null'
  }, ${children ? `${children}` : 'null'})`;
  console.log(code);
}
