# # MVVM

MVVM（ Model-View-ViewModel ） 为一种设计模式，下图不仅概括了 MVVM 模式，还描述了在Vue.js 中ViewModel 是如何和 View 以及 Model 进行交互的。

![](IMGS/mvvm.png)

**\> ViewModel 是 Vue.js 的核心，它是一个 Vue 实例。**

当创建了ViewModel 后，双向绑定是如何达成的呢？

- 首先，我们将上图中的DOM Listeners 和 Data Bindings 看作两个工具，它们是实现双向绑定的关键。
- 从 View 看，ViewModel 中的 DOM Listeners 工具会帮我们监测页面上DOM元素的变化，如果有变化，则更改Model中的数据；
- 从 Model 看，当我们更新Model中的数据时，Data Bindings工具会帮我们更新页面中的DOM元素。

我们通过一组 `Hello, world!` 实例来深入了解 MVVM 设计模式：

```html
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="UTF-8">
    <title>MVVM</title>
</head>
<body>

<!--view-->
<div id="app">
    <input type="text" v-model="message">
    <h1> {{ message }}</h1>
</div>

<script type="text/javascript" src="plugin/vue.min.js"></script>
<script>
    // model
    let model = {
        message: "Hello, world!"
    }
    // viewModel
    let vm = new Vue({
        el: "#app",
        data: model
    });
</script>

</body>
</html>
```

![](IMGS/mvvm.gif)

[查看demo](https://lihongyao.github.io/tutorials/vue/01.GettingStarted/index.html)

使用Vue的过程就是定义MVVM各个组成部分的过程的过程。

1. **定义View**
2. **定义Model**
3. **创建一个Vue实例或"ViewModel"，它用于连接View和Model**

> 在这个示例中，**选项对象**的**el属性**指向View，`el: '#app' `表示该Vue实例将挂载到`<div id="app">...</div>`这个元素；**data属性**指向Model，`data: model` 表示我们的Model是model对象。

> Vue.js有多种数据绑定的语法，最基础的形式是文本插值，使用一对大括号语法，在运行时`{{ message }}`会被数据对象的message属性替换，所以页面上会输出"Hello World!"。

# # 创建一个 vue 实例

上述 `Hello, world!` 示例已经结合 MVVM 设计模式创建了一个 vue 实例，这里不再阐述。

# # 数据与方法

当一个 Vue 实例被创建时，它向 Vue 的**响应式系统**中加入了其 `data` 对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

```javascript
// 我们的数据对象
var data = { a: 1 }
// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})
// 他们引用相同的对象！
vm.a === data.a // => true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2
// ... 反之亦然
data.a = 3
vm.a // => 3
```

当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时 `data` 中存在的属性是**响应式**的。也就是说如果你添加一个新的属性，像：

```javascript
vm.b = 'hi'
```

那么对 `b` 的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，那么你仅需要设置一些初始值。比如：

```javascript
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
```

除了 data 属性，Vue 实例暴露了一些有用的实例属性与方法。它们都有前缀 `$`，以便与用户定义的属性区分开来。例如：

```javascript
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // => true
vm.$el === document.getElementById('example') // => true
// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
  // 这个回调将在 'vm.a 改变后调用
});
```

# # 实例生命周期

每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，给予用户机会在一些特定的场景下添加他们自己的代码。

比如 [`created`](https://cn.vuejs.org/v2/api/#created) 钩子可以用来在一个实例被创建之后执行代码：

```javascript
new Vue({
    el: "#app",
    data: {
        name: "Henrry Lee"
    },
    created: function () {
        // this 指向 vue 实例
        console.log(`Hello, ${this.name}!`);
    }
});
// => "Hello, Henrry Lee!"
```

也有一些其它的钩子，在实例生命周期的不同场景下调用，如 [`mounted`](https://cn.vuejs.org/v2/api/#mounted)、[`updated`](https://cn.vuejs.org/v2/api/#updated)、[`destroyed`](https://cn.vuejs.org/v2/api/#destroyed)。钩子的 `this` 指向调用它的 Vue 实例。

# # 生命周期图示

下图说明了实例的生命周期。你不需要立马弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。

![](IMGS/lifecycle.png)

















