# 一、前言

2020年09月18日， Vue.js 3.0 正式发布，本教程，从基础开始，由浅到深进行讲解，并结合实际中遇到的问题进行总结。

> 本教程主要以 `3.x` 为主，参考 [官方文档 >>](https://staging-cn.vuejs.org/)，章节中，会出一些和 `2.x` 的对比。

**特别提示：**

本教程主要以 `Vite2` + `Vue3` + `TypeScript` 构建演示示例，如果你还不了解什么是 `TypeScript` ，建议你先去 [学习 TypeScript  >>](https://www.yuque.com/u2209957/sd1ag6)

# 二、概述

Vue (发音为 /vjuː/，类似 **view**) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套 声明式的、组件化的编程模型，帮助你高效地开发用户界面，无论任务是简单还是复杂。

**两大核心**：

- **声明式渲染**：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。
- **响应性**：Vue 会自动跟踪 JavaScript 状态变化并在改变发生时响应式地更新 DOM。

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
│   ├── App.vue		          # 根组件
│   ├── env.d.ts              # 类型定义
│   └──	main.ts               # 入口文件 
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

> 提示：`App.vue` 文件为一个单文件组件（单文件组件也被称为 `*.vue` 文件，英文 Single-File Components，缩写为 **SFC**），通常作为 vue **根组件**，一个完整的组件包含脚本、模板以及样式。关于组件的更多知识点我们会在后续讲到，这里只需要了解即可。

# 五、应用实例

每个 Vue 应用都是通过`createApp` 函数创建一个新的 **应用实例** 开始的，通常，我们需要传一个组件给它用于配置 **根组件**，该组件被作为渲染的起点（通常为 `App.vue`）。

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

然后在浏览器访问：`http://locahost:300`，可以看到，界面输出 “Hello，Vue3.x！”

# 七、API风格

Vue 的组件可以按两种不同的风格书写：**选项式** 和 **组合式**。

[官方参考 >>](https://staging-cn.vuejs.org/guide/introduction.html#api-styles)

本小节主要讲解vue中的 组合式 API（Composition API） 和 选项式API（Options API） 的区别，对于介绍中的一些概念可能你不是很了解，不过没有关系，这不是重点，后续章节会重点介绍，在这里，你只需要了解二者的区别和我们最终的取舍即可。 

## 1. Options API

在 `Vue2.x` 中，编写组件的方式是 `Options API`，`Options API` 的一大特点就是在对应的属性中编写对应的模块，比如：

```vue
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'component-name' /** 组件名 */,
  mixins: [] /** 混合（复用组件功能） */,
  props: {} /** 属性（父组件调用时传入） */,
  data() {  return {} }, /** 组件内响应式数据，必须是一个函数，且返回一个对象*/
  computed: {}, /** 计算属性 */
  methods: {}, /** 方法 */
  watch: {}, /** 监听器 */
  emits: [], /** 自定义事件 */
  ...
});
</script>
```

除了上面列出的部分，还包括一些生命周期钩子函数。

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。

```vue
<script>
export default {
  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 this 上
  data() {
    return {
      count: 0
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++
    }
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

这么做有一个很大的弊端：

- 当我们实现某一个功能时，这个功能对应的 **代码逻辑会被拆分** 到各个属性中；
- 当我们组件变得更大、更复杂时，逻辑关注点的列表就会增长，那么 **同一个功能的逻辑就会被拆分的很分散**；
- 对于那些一开始没有编写这些组件的人来说，这个组件的代码是难以阅读和理解的；

## 2. Composition API

通过组合式 API，我们可以使用导入的 API 函数来描述组件逻辑。在单文件组件中，组合式 API 通常会与 [`<script setup>`](https://staging-cn.vuejs.org/api/sfc-script-setup.html) 搭配使用。这个 `setup` 属性是一个标识，告诉 Vue 需要在编译时进行转换，来减少使用组合式 API 时的样板代码。例如，`<script setup>` 中的导入和顶层变量/函数都能够在模板中直接使用。

```vue
<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

> **注意！** 由于 `setup` 在 `beforeCreate` 生命周期函数之前执行（也就是说在实例被完全初始化之前执行），所以在 `setup` 中的 `this` 没有任何东西，故而在 `setup` 中**不能使用 `this`**.

## 3. 该如何选？

两种 API 风格都能够覆盖大部分的应用场景。它们只是 **同一个底层系统所提供的两套不同的接口**。实际上，**选项式 API 是在组合式 API 的基础上实现的**！关于 Vue 的基础概念和知识在它们之间都是通用的

- 选项式 API 以“**组件实例**”的概念为中心 (即上述例子中的 `this`)，对于有面向对象语言背景的用户来说，这通常与基于类的心智模型更为一致。同时，它将响应性相关的细节抽象出来，并强制按照选项来组织代码，从而对初学者而言更为友好。
- 组合式 API 的核心思想是直接**在函数作用域内定义响应式状态变量**，**并将从多个函数中得到的状态组合起来处理复杂问题**。这种形式更加自由，也需要你对 Vue 的响应式系统有更深的理解才能高效使用。相应的，它的灵活性也使得组织和重用逻辑的模式变得更加强大。
- 在后续的课程讲解中，如非必要，我都会使用 `Composition API` 构造组件;

# 八、特别说明

为了方便演示示例，在讲解一个新的知识点前，你应该新建组件，比如，讲解条件渲染，你应该在 `./src/components` 目录下新建 `ConditionalRendering.vue` 文件（名字可以自己随意取，但还是要保证语义化），该文件为一个单文件组件，尽管还没有讲到组件章节，但你可以提前了解组件相关的一些基础。

现在先简单介绍一个组件的基本结构，组件通常包含三个部分：

```vue
<!-- 脚本 -->
<script setup lang="ts"></script>

<!-- 模板 -->
<template></template>

<!-- 样式 -->
<style scoped></style>
```

组件定义好之后需要在 `App.vue` 文件中引用：

```vue
<!-- 脚本 -->
<script setup lang="ts">
// 导入组件
import ConditionalRendering from './components/ConditionalRendering.vue';

</script>
<!-- 模板 -->
<template>
  <div class="root">Hello, Vue3.x!</div>
  <!-- 使用组件 -->
  <ConditionalRendering />
</template>
<!-- 样式 -->
<style scoped></style>
```

