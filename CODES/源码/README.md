# 一、搭建环境

## 1. 安装依赖

在指定位置打开终端（Terminal），复制如下指令执行：

```shell
$ mkdir examples && cd examples && mkdir src && touch index.html && touch src/index.js && npm init -y && touch rollup.config.js && touch bable.config.js && touch .browserslistrc && npm i rollup rollup-plugin-serve @rollup/plugin-babel @babel/core @babel/preset-env core-js -D && code .
```

## 2. 填充代码

**`src/index.js`**

源码入口

```js
function Vue(options) {
  console.log(options)
}
export default Vue;
```

**`.browserslistrc`**

浏览器兼容性处理

```
> 1%
last 2 version
not dead
```

**`bable.config.js`**

语法解析（转换）

```js
export default {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-typescript',
  ],
};
```

**`indexhtml`**

测试入口文件

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>手撸Vue</title>
</head>

<body>
  <div id="app">Hello</div>
  <script src="./dist/vue.js"></script>
  <script>
    new Vue({
      el: "#app",
      data: {},
      props: {},
      watch: {},
    });
  </script>
</body>

</html>
```

**`rollup.config.js`**

打包配置文件

```js
import { defineConfig } from 'rollup';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';

export default defineConfig({
  input: 'src/index.js',
  output: {
    file: 'dist/vue.js',
    format: 'umd',
    name: 'Vue',
    sourcemap: true,
  },
  plugins: [
    babel({
      extensions: ['.js'], // 需要转译的文件扩展名
      exclude: 'node_modules/**',
      babelHelpers: 'bundled', // 使用集成的 babel-helpers
    }),
    serve({
      port: 3000,
      contentBase: '', // 空字符串表示当前目录
      openPage: '/index.html',
    }),
  ],
});
```

## 3. 配置脚本

在 **`package.json`** 文件中配置 `type` 及 `scripts.dev`：

```
"type": "module",
"scripts": {
  "dev": "rollup -c -w"
},
```

## 4. 运行脚本

```shell
$ npm run dev
```

# 二、数据劫持

在对数据进行初始化时，首先判断data是否是函数，如果是函数则调用函数（*动态绑定this到vm实例*）拿到实际的data对象，然后进行数据劫持。数据劫持分两种情况。

1. 对象劫持

   当data为对象时，遍历对象属性，通过 **`Object.defineProperty`** 进行劫持（深度劫持/新值劫持）。

2. 数组劫持

   当data为数组时，通过重写数组方法进行劫持，这里用到了AOP切片的思想，大概就是通过原型获取数组方法，然后创建劫持数组继承。

# 三、模板编译

Vue 初次渲染：先初始化数据 → 将模板进行编译 → 变成render() → 生成虚拟DOM → 变成真实DM → 放到页面上

Vue模板编译方式：  template render el 注意：el（必须要有）
