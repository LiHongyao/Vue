# 一、前言

Hello，各位小伙伴，我是耀哥。2020年09月18日， Vue.js 3.0 正式发布，目前，我在项目开发中，除了使用React之外，也在使用 Vue3。闲暇之余，为了加深自己对Vue的理解，同时作一个记录，特出此教程，之前我也出过Vue2.x的教程，那么这次也主要是在2.x差的基础上升级更新。本次教程，也会从基础开始，由浅到深进行讲解，并结合实际中遇到的问题进行总结。

由于近期也在忙公司项目，所以更新或许会比较慢，不过我争取在过年之前出完。

特别提示：本教程主要以3.x为主，参照 [官网文档 >>](https://v3.cn.vuejs.org/)，章节中，或许会出一些和vue2.x的对比。

**特别提示：**

在目前的开发中，我主要使用 `Vite2` + `Vue3` + `TypeScript` 开发，所以，本系列教程我主要使用 Vite 来创建项目，并结合 TypeScript 使用，如果你还不了解什么是 TypeScript ，建议你先去 [学习 TypeScript  >>](https://www.yuque.com/u2209957/sd1ag6)

# 二、概述

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://v3.cn.vuejs.org/guide/single-file-component.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#components--libraries)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看 [对比其它框架 >>](https://cn.vuejs.org/v2/guide/comparison.html)。

# 三、引入

1. [CDN >>](https://v3.cn.vuejs.org/guide/installation.html#cdn)
2. [npm >>](https://v3.cn.vuejs.org/guide/installation.html#npm)
3. [CLI >>](https://v3.cn.vuejs.org/guide/installation.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%B7%A5%E5%85%B7-cli)
4. [vite >>](https://v3.cn.vuejs.org/guide/installation.html#vite)

[Vite](https://cn.vitejs.dev/) 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

接下来，我们一起尝试使用 Vite 来创建项目：

```shell
# npm 7+
# 创建项目
$ npm init vite@latest vue-tutorial -- --template vue-ts
# 进入项目
$ cd vue-tutorial
# 安装依赖
$ npm install
```

> 温馨提示 :
>
> - `vue-tutorial` ：项目名称；
> - `vue-ts`：项目模板
> - 如果你的 `npm` 版本低于 `7`，请升级 `node` 和 `npm`。

# 四、模板改造

通过 Vite 构建的项目为我们预生成了一些文件，由于本教程主要从基础开始讲解，所以我们需要从头开始引入Vue，接下来我们删除不必要的文件，只保留如下目录结构：

```ini
vue-tutorial
.
├── node_modules
├── public                    
├── src                       # 源码文件
│   ├── assets                # 静态资源
│   ├── App.vue				  # 根组件
│   ├── env.d.ts              # 类型定义
│	└──	main.ts               # 入口文件 
├── .gitignore                # git跟踪忽略配置
├── index.html                # 模板
├── tsconfig.json             # TS 配置文件
└── vite.config.js            # vite 配置文件 
```

首先我们来改造 `App.vue` 文件：

```vue
<!-- 脚本 -->
<script setup lang="ts"></script>
<!-- 模板 -->
<template>
  <div class="root">Hello, Vue3.x!</div>
</template>
<!-- 样式 -->
<style scoped></style>
```

> 提示：`App.vue` 文件为一个单文件组件，通常作为 vue **根组件**，一个完整的组件包含脚本、模板以及样式。关于组件的更多知识点我们会在后续讲到，这里只需要了解即可。

# 五、应用实例

每个 Vue 应用都是通过用 `createApp` 函数创建一个新的 **应用实例** 开始的，通常，我们需要传一个组件给它用于配置 **根组件**，该组件被作为渲染的起点。

一个应用需要被挂载到一个 DOM 元素中，例如，如果你想把一个 Vue 应用挂载到 `<div id="app"></div>`，应该传入 `#app`：

```typescript
// -- main.js
// -- 导入创建实例方法
import { createApp } from 'vue';
// -- 导入根组件
import App from './App.vue';

// -- 创建应用程序实例
const app = createApp(App);
// -- 挂载
const vm = app.mount('#app');
// -- 输出实例
console.log(vm);
```

> 提示：通过 `vite` 生成的模板 `index.html` 文件中默认存在 `<div id="app" />`，所以我们挂载vue时使用 `#app`。

与大多数应用方法不同的是，`mount` 不返回应用本身。相反，它返回的是根组件实例。

# 六、运行项目

终端输入：`npm run dev`

然后在浏览器访问：`http://locahost:300`，可以看到，界面输入 “Hello，Vue3.x！”





