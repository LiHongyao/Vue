import { generate } from './generate.js';
import { parseHTML } from './parseAst.js';

export function compileToFunction(el) {
  // 1. 将HTML解析成AST抽象语法树
  const ast = parseHTML(el);
  // 2. 将AST语法树转成 render 函数 （1）将AST 语法树变成字符串（2）字符串变成函数
  let code = generate(ast);
}
