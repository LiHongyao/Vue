// 用于解析标记和属性的正则表达式(源码仓库拷贝)
const attribute =
  /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/; // 匹配属性
const dynamicArgAttribute =
  /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`; // 标签名称
const qnameCapture = `((?:${ncname}\\:)?${ncname})`; // <span:x>
const startTagOpen = new RegExp(`^<${qnameCapture}`); // 标签开头的正则，捕获的内容是标签名
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);
const doctype = /^<!DOCTYPE [^>]+>/i;
const comment = /^<!\--/;
const conditionalComment = /^<!\[/;

// -- 创建AST语法树
function createASTElement(tag, attrs) {
  return {
    tag, // 元素
    attrs, // 属性
    children: [], // 子节点
    type: 1,
    parent: null,
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
      text,
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

export function parseHTML(html) {
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
        attrs: [],
      };
      // 删除开始标签
      advance(start[0].length);
      // 属性
      // 注意：多个属性，遍历
      // 注意：>，标识开始标签结束
      let attr;
      let end;
      while (
        !(end = html.match(startTagClose)) &&
        (attr = html.match(attribute))
      ) {
        match.attrs.push({
          name: attr[1],
          value: attr[3] || attr[4] || attr[5],
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
