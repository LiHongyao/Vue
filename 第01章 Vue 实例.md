# 一、MVC

M（Mode）数据层

V（View）视图层

C（Controller）控制层

M -> 发送通知 -> 控制层 -> 刷新视图

V  -> 发送通知 -> 控制层 -> 刷新数据

# 二、MVVM

MVVM（ Model-View-ViewModel ） 为一种设计模式，下图不仅概括了 MVVM 模式，还描述了在Vue.js 中ViewModel 是如何和 View 以及 Model 进行交互的。

![](IMGS/mvvm.png)

**\> ViewModel 是 Vue.js 的核心，它是一个 Vue 实例。**

MVVM分为Model、View、ViewModel三者。
\1. **Model** 代表数据模型，数据和业务逻辑都在Model层中定义；
\2. **View** 代表UI视图，负责数据的展示；
\3. **ViewModel** 负责监听 **Model** 中数据的改变并且控制视图的更新，处理用户交互操作；
\4. **Model** 和 **View** 并无直接关联，而是通过 **ViewModel** 来进行联系的，**Model** 和 **ViewModel** 之间有着双向数据绑定的联系。因此当 **Model** 中的数据改变时会触发 **View** 层的刷新，**View** 中由于用户交互操作而改变的数据也会在 **Model** 中同步。

这种模式实现了 **Model** 和 **View** 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 **dom**。

我们通过一组 `Hello, world!` 实例来深入了解 MVVM 设计模式：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>vue</title>
</head>
<body>
    <!-- V -->
    <div id="app">
        <!-- 双向绑定 -->
        <input type="text" v-model="message">
        <!-- 绑定数据 -->
        <h1>{{message}}</h1>
    </div>
    <!-- 引入库 -->
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script src="./js/index.js"></script>
</body>
</html>
```

```js
// M
let model = {
    message: "Hello, vue.js!"
}
// VM
let vm = new Vue({
    // 挂载元素/值为选择器
    el: "#app",
    // Model/数据层/Object
    data: model
});
```



![](IMGS/mvvm.gif)

使用Vue的过程就是定义MVVM各个组成部分的过程。

1. **定义View**
2. **定义Model**
3. **创建一个Vue实例或"ViewModel"，它用于连接View和Model**

> 在这个示例中，**选项对象**的**el属性**指向View，`el: '#app' `表示该Vue实例将挂载到`<div id="app">...</div>`这个元素；**data属性**指向Model，`data: model` 表示我们的Model是model对象。

> Vue.js有多种数据绑定的语法，最基础的形式是文本插值，使用一对大括号语法，在运行时`{{ message }}`会被数据对象的message属性替换，所以页面上会输出"Hello World!"。

# 三、Vue 响应式原理

当一个Vue实例创建时，vue会遍历data选项的属性，用 **Object.defineProperty** 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

![](./IMGS/response-yuanli.jpg)

# 五、生命周期

每个 Vue 实例在被创建之前都要经过一系列的初始化过程，在这个过程中也会运行一些叫做**生命周期钩子**的函数，给予用户机会在一些特定的场景下添加他们自己的代码。

##　2.ｘ

![](IMGS/lifecycle.png)

### \> beforeCreate

在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

### \> created

实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，`$el` 属性目前不可见。 可以在组件的这个期间 **请求数据**，如果是keep-alive组件会被缓存起来，生命周期不会再次触发，如果需要更新数据可以watch当前router变化，如果router是当前组件所在的router则请求数据。

### \> beforeMount

在挂载开始之前被调用：相关的 `render` 函数首次被调用。

### \> mounted

vm.$el 已挂载在文档内，对已有dom节点的操作可以在这期间进行。

### \> beforeUpdate

数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。

可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

### \> updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

### \> activated

keep-alive 组件激活时调用。

### \> deactivated

keep-alive 组件停用时调用。

### \> beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。

### \> destroyed

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

### \> errorCaptured

当捕获一个来自子孙组件的错误时被调用。

## 3. x

**被替换**

1. beforeCreate -> setup()
2. created -> setup()

**重命名**

1. beforeMount -> onBeforeMount
2. mounted -> onMounted
3. beforeUpdate -> onBeforeUpdate
4. updated -> onUpdated
5. beforeDestroy -> onBeforeUnmount
6. destroyed -> onUnmounted
7. errorCaptured -> onErrorCaptured

**新增的**

新增的以下2个方便调试 `debug` 的回调钩子：

1. onRenderTracked
2. onRenderTriggered









