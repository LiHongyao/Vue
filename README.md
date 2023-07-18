# 一、前言

2020年09月18日， Vue.js 3.0 正式发布，本教程，从基础开始，由浅到深进行讲解，并结合实际中遇到的问题进行总结。

> 本教程主要以 `3.x` 为主，参考 [官方文档 >>](https://staging-cn.vuejs.org/)，章节中，会出一些和 `2.x` 的对比。

**特别提示：**

本教程主要以 `Vite2` + `Vue3` + `TypeScript` 构建演示示例，如果你还不了解什么是 `TypeScript` ，建议你先去 [学习 TypeScript  >>](https://www.yuque.com/u2209957/sd1ag6)

# 二、概述

Vue (发音为 /vjuː/，类似 **view**) 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

Vue的核心思想是基于组件化的开发方式。Vue将用户界面拆分成一个个可复用的组件，每个组件都有自己的逻辑和样式，可以独立开发、测试和维护。通过组件的组合和嵌套，可以构建出复杂的用户界面。

Vue的组件化开发方式带来了以下几个核心思想：

1. **声明式渲染**：Vue使用模板语法，将组件的数据和DOM进行绑定，通过声明式的方式描述应该如何渲染视图，而不需要手动操作DOM。
2. **组件化**：Vue将用户界面拆分成一个个独立的组件，每个组件包含自己的模板、逻辑和样式，可以通过组件的组合和嵌套来构建复杂的用户界面。
3. **响应式**：Vue使用响应式的数据绑定机制，当数据发生变化时，自动更新对应的视图，保持数据和视图的同步。
4. **单向数据流**：Vue遵循单向数据流的原则，数据从父组件传递给子组件，子组件通过事件向父组件发送消息，实现了数据的可追溯性和可维护性。
5. **渐进式框架**：Vue是一个渐进式框架，可以逐步引入和使用其特性，从简单的页面增加到复杂的应用，同时也支持与其他库和现有项目的集成。

综上所述，Vue的核心思想是通过组件化的开发方式实现声明式渲染、响应式数据绑定和单向数据流，从而让开发者可以更高效、可维护地构建用户界面。

# 三、初体验

## 1. 创建项目

课程示例均通过 [Vite](https://cn.vitejs.dev/) 来构建示例，当然你也可以在 [这里](https://cn.vuejs.org/guide/quick-start.html) 查看官方推荐的其他引用方式。

Vite 是一个面向现代浏览器的开发构建工具。它的目标是提供一种快速的开发体验，特别适用于Vue.js单页面应用（SPA）的开发。

接下来，我们一起尝试使用 Vite 来创建项目（[参考 >>](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)）：

```shell
$ npm create vite@latest vue-examples -- --template vue-ts && cd vue-examples && npm install && code .
```

> 温馨提示 :
>
> - `vue-examples` ：项目名称；
> - `vue-ts`：项目模板
> - 如果你的 `npm` 版本低于 `7`，请升级 `node` 和 `npm`。

## 2. 目录结构

通过 Vite 构建的项目为我们预生成了一些文件，如下所示：

```
vue-examples
.
├── /node_modules
├── /public                    
├── /src                      
│   ├── /assets       # 静态资源               
│   ├── /components   # 公共组件
│   ├── App.vue       # 根组件		           
│   ├── main.ts       # 入口文件  
│   ├── style.css      
│   └──	vite-env.d.ts # 类型定义             
├── .gitignore                
├── index.html        # 模板文件               
├── package.json
├── tsconfig.json     # TS配置文件             
├── tsconfig.node.json
└── vite.config.js    # Vite配置文件 
```

由于本教程主要从基础开始讲解，所以我们需要从头开始引入Vue，接下来我们删除不必要的文件，只保留如下目录结构：

```
vue-examples
.
├── /node_modules
├── /public                    
├── /src                                 
│   ├── main.ts       # 入口文件   
│   └──	vite-env.d.ts # 类型定义             
├── .gitignore                
├── index.html        # 模板文件               
├── package.json
├── tsconfig.json     # TS配置文件             
├── tsconfig.node.json
└── vite.config.js    # Vite配置文件          
```

## 3. 根组件

在后续创建应用实例时，我们需要传入一个组件（App.vue）作为整个应用程序的根组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。在Vue中，组件推荐使用单文件组件（单文件组件也被称为 `*.vue` 文件，英文 Single-File Components，缩写为 **SFC**），单文件组件包含脚本、模板以及样式。

接下来，我们在 src 目录中新建一个 App.vue 文件，并填充如下代码：

```vue
<script setup lang="ts"></script>
<template>
  <div class="App">Hello, Vue.js!</div>
</template>
<style lang="less" scoped></style>
```

## 4. 应用实例

每个 Vue 应用都是从通过 *`createApp`* 函数创建一个新的 **应用实例** 开始的，通常，我们需要传一个组件给它用于配置 **根组件**，该组件被作为渲染的起点（通常为 `App.vue`，刚刚我们已配置）。

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

与大多数应用方法不同的是，`mount` 不返回应用本身，相反，它返回的是根组件实例。

## 5. 运行项目

```shell
$ npm run dev
> vue-examples@0.0.0 dev
> vite
  VITE v4.3.9  ready in 831 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

然后在浏览器访问：`http://localhost:5173/`，界面输出 “*Hello, Vue.js!*”。

# 四、API风格

Vue 的组件可以按两种不同的风格书写：**选项式（Options API）** 和 **组合式（Composition API）**。

[官方参考 >>](https://staging-cn.vuejs.org/guide/introduction.html#api-styles)

本小节主要讲解vue中的 组合式API 和 选项式API 的区别，对于介绍中的一些概念可能你不是很了解，不过没有关系，这不是重点，后续章节会重点介绍，在这里，你只需要了解二者的区别和我们最终的取舍即可。 

## 1. Options API

选项式API是Vue早期版本使用的传统方式，通过在Vue组件的选项中定义各种属性和方法来组织代码，如下所示：

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

> 提示：除了上面列出的部分，还包括一些生命周期钩子函数。

它将组件的逻辑分散在不同的选项（如`data`、`methods`、`computed`、`watch`等）中，使得组件的结构相对简单易懂。

使用选项式 API，我们可以用包含多个选项的对象来描述组件的逻辑，选项所定义的属性都会暴露在函数内部的 `this` 上，它会指向当前的组件实例。

```vue
<script>
export default {
  // data函数返回的属性将会成为响应式的状态
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

选项式API适合编写小型、简单的组件，易于上手和理解。

## 2. Composition API

组合式API是Vue 3.0引入的新特性，旨在解决大型复杂组件难以维护的问题。组合式API通过  [`<script setup>`](https://staging-cn.vuejs.org/api/sfc-script-setup.html)  将组件的逻辑组织在一起，使得相关的逻辑可以被封装成自定义的逻辑函数（Composition Function）。它提供了更灵活、可组合的方式来组织和重用组件的逻辑，可以根据功能将相关代码聚合在一起，提高了代码的可读性和可维护性。组合式API适合编写大型、复杂的组件，能够更好地组织和管理组件的逻辑。

现在，我们将刚刚的示例以组合式API的形式来实现：

```vue
<script setup>

import { ref, onMounted } from 'vue';

// 响应式状态
const count = ref(0);

// 用来修改状态、触发更新的函数
function increment() {
  count.value++;
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

> **注意！** 由于 `setup` 在 `beforeCreate` 生命周期函数之前执行（也就是说在实例被完全初始化之前执行），因此无法使用`this`访问组件实例的属性和方法。

## 3. 该如何选？

选项式API是Vue早期版本中使用的开发方式，基于配置对象。在选项式API中，组件的选项（如data、methods、computed等）被分散定义在不同的选项中，每个选项对应组件的不同功能。

组合式API是Vue 3中引入的新的开发方式。它基于函数，允许将相关的逻辑组合在一起，形成可重用的逻辑块。通过使用`setup`函数，可以将相关的响应式状态、计算属性、方法等逻辑放在一起，使代码更清晰、可维护和可重用。

在选择使用哪种API时，可以考虑以下几点：

1. 项目需求：如果你正在使用Vue 2.x或早期版本，并且已经使用了选项式API进行开发，迁移到组合式API可能需要更多的工作量和调整。在这种情况下，继续使用选项式API可能是一个更好的选择。
2. 组件复杂度：如果你的组件非常简单，逻辑较为直接，选项式API可能足够满足需求。但如果组件的逻辑较为复杂，或者需要处理大量的状态管理、副作用等情况，使用组合式API可以更好地组织和管理代码。
3. 代码复用：如果你需要在多个组件之间共享逻辑，组合式API提供了更好的复用能力。通过定义可重用的逻辑块，可以更方便地在不同的组件中使用和测试这些逻辑。
4. 类型检查：如果你使用TypeScript或其他类型检查工具，组合式API对类型检查提供了更好的支持。通过使用类型声明，可以在开发过程中捕捉更多的错误和问题。

总之，对于新项目或者正在进行重构的项目，推荐使用组合式API。对于现有的Vue 2.x项目，如果没有迁移的紧迫性或成本限制，并且组件逻辑不是非常复杂，可以继续使用选项式API。最终的选择应该根据项目需求、开发团队的熟悉程度和团队内部的共识来决定。

> 提示：在后续的课程讲解中，如非必要，我都会使用 `Composition API` 构造组件;

# 五、Vue2.x 🆚 Vue3.x

1. 性能提升：Vue 3 在底层进行了重写，采用了更高效的编译器和虚拟 DOM 实现，通过使用Proxy代理对象替代Vue 2中的Object.defineProperty进行响应式数据追踪，Vue 3能够实现更高效的响应式系统，从而提高了整体性能。
2. 组合式API：Vue 3引入了组合式API，这是一个基于函数的API，使开发者能够更好地组织和复用组件的逻辑。组合式API通过`setup`函数，允许将相关逻辑组合在一起，并以可重用的逻辑块形式进行导出。
3. 更好的 TypeScript 支持：Vue 3对于TypeScript提供了更好的支持，包括更强大的类型推导和类型推断能力。Vue 3的源码也使用了TypeScript编写，这进一步提高了与TypeScript的兼容性。
4. 更小的包体积：Vue 3的包体积相比Vue 2有所减小，这主要是通过进行模块的拆分和优化来实现的。这意味着在使用Vue 3时，可以减少对网络加载的负担。
5. 更好的逻辑复用和代码组织：组合式API的引入使得逻辑复用和代码组织变得更加灵活和直观。相比于Vue 2中的选项式API，组合式API更适合于处理复杂的逻辑和组件。
6. Teleport 组件：Vue 3 引入了 Teleport 组件，它允许开发者将组件的内容渲染到 DOM 树的不同位置，使得在组件的外部渲染内容成为可能。
7. Fragment 标签：Vue 3 引入了 Fragment 标签，它允许组件返回多个根元素，避免了在 Vue 2.x 中需要包裹额外的标签的问题。
8. 更好的响应式系统：Vue 3 对响应式系统进行了改进，提供了更强大和灵活的响应式 API，包括 `reactive`、`ref`、`watchEffect` 等，使得状态管理更加便捷。

# 六、特别说明

为了方便演示示例，在讲解一个新的知识点前，你应该新建组件，比如，讲解模板渲染，你应该在 `./src/components` 目录下新建 `Templates.vue` 文件（名字可以自己随意取，但还是要保证语义化），该文件为一个单文件组件，尽管还没有讲到组件章节，但你可以提前了解组件相关的一些基础。

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
import Templates from './components/Templates.vue';

</script>
<!-- 模板 -->
<template>
  <!-- 使用组件 -->
  <ConditionalRendering />
</template>

<!-- 样式 -->
<style scoped></style>
```

