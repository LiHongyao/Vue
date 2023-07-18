/*
 * @Author: Lee
 * @Date: 2023-06-13 14:54:46
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-13 16:44:58
 * @Description:
 */

import type { App } from 'vue';

// -- 使用 import.meta.glob 动态导入自定义指令
// -- 指定文件匹配模式，该模式匹配 ../directives 目录下的所有ts文件
const moduleFiles = import.meta.glob('../directives/*.ts');

export default async function (app: App<Element>) {
  // -- 遍历 moduleFiles
  for (const path in moduleFiles) {
    // 检查 modules 对象中是否存在名为 path 的属性（作用：确保在遍历对象属性时，只迭代对象自身的属性，而不包括继承的属性）
    if (Object.hasOwnProperty.call(moduleFiles, path)) {
      const module = (await moduleFiles[path]()) as { default: Function };
      module.default(app);
    }
  }
}
