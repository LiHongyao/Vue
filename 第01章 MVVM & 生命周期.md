# 一、MVVM

Vue 的设计主要受到MVVM模型的启发，因此在官方文档中经常会使用 `vm` 这个变量名表示组件实例。

接下来给大家介绍一下MVVM，不过，在开始之前可以先给大家简单介绍下MVC设计模式，在MVC设计模式中：

- `M（Mode，模型）`：用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法，“ Model ” 有对数据直接访问的权力，例如对数据库的访问，“Model” 不依赖 “View” 和 “Controller”，也就是说， Model 不关心它会被如何显示或是如何被操作。但是 Model 中数据的变化一般会通过一种刷新机制被公布。为了实现这种机制，那些用于监视此 Model 的 View 必须事先在此 Model 上注册，从而，View 可以了解在数据 Model 上发生的改变。（比如：[观察者模式](https://zh.wikipedia.org/wiki/观察者模式)）

- `V（View，视图）`：能够实现数据有目的的显示（理论上，这不是必需的）。在 View 中一般没有程序上的逻辑。为了实现 View 上的刷新功能，View 需要访问它监视的数据模型（Model），因此应该事先在被它监视的数据那里注册。

- `C（Controller，控制器）`：负责转发请求，对请求进行处理。作为 “Modal” 和 “View”交互的桥梁，它处理事件并作出响应，“事件”包括用户的行为和数据 Model 上的改变。

简单理解就是，当数据发生变化，发送通知给控制器刷新视图，同理控制器监听用户操作，当需要修改数据时控制器会通知数据模型刷新数据，这里可以看出，视图和模型不直接交互，而是通过控制器实现对接的，那MVVM和MVC类似。

MVVM（ **Model-View-ViewModel** ） 为一种设计模式。

![](IMGS/mvvm.png)

其中：

- `Model` 表示数据模型；

- `View` 表示视图；

- `ViewModel` 负责监听Model中的数据改变并且控制视图的更新，处理用户交互操作，类似于MVC设计模式中的控制器，其本质为一个Vue的实例。

> 提示：**Model** 和 **View** 并无直接关联，而是通过 **ViewModel** 来进行联系的，**Model** 和 **ViewModel** 之间有着双向数据绑定的联系。因此当 **Model** 中的数据改变时会触发 **View** 层的刷新，**View** 中由于用户交互操作而改变的数据也会在 **Model** 中同步。

这种模式实现了 **Model** 和 **View** 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 **DOM**。

# 二、Vue 响应式

在 vue 中，可以通过双花括号来将数据绑定在视图上，比如：

```vue
<script setup lang="ts">
    
// -- 定义变量
let count = 0;
    
</script>

<template>
  <!-- 绑定数据 -->
  <div>count：{{ count }}</div>
</template>
```

页面输出：`count：0`，接下来我们在模板（`template`）中定义一个按钮尝试修改 `count` 的值，看看视图是否发生变化：

```vue
<script setup lang="ts">
// -- 定义变量
let count = 0;

// -- 事件处理函数
const increment = () => {
  count++;
};
</script>

<template>
  <!-- 绑定数据 -->
  <div>count：{{ count }}</div>
  <button type="button" @click="increment">increment</button>
</template>
```

上述示例中，`@click` 表示为按钮 `button` 添加一个点击事件，事件处理函数为：`increment`，在事件处理函数中，我们让 `count` 变量自增，点击按钮，可以发现，视图并没有更新。这是因为我们定义的变量 `count` 并非是响应式的（尽管你可以将其呈现在视图上，但变量 `count` 并没有加入响应式系统中）。

接下来，我们看看在 vue 中响应式相关的 API：

## 1. 响应式基础API

### 1.1. `ref()`

接受一个内部值并返回一个响应式且可变的 `ref` 对象，该对象只有一个 `value` 属性指向该内部值。

接下来我们改造一下示例，将 `count` 值通过 `ref` 包裹：

```vue
<script setup lang="ts">
import { ref } from 'vue';
// -- 定义变量
let count = ref(0);

// -- 事件处理函数
const increment = () => {
  count.value++; // count.value = count.value + 1
};
</script>

<template>
  <!-- 绑定数据 -->
  <div>count：{{ count }}</div>
  <button type="button" @click="increment">increment</button>
</template>
```

点击按钮，可以发现，`count` 值成功更新。

> 提示：`ref` 一般用于原始数据类型，如 字符串、数值、布尔类型等。如果你要将一个对象加入响应式，建议使用 `reactive`。

`ref()` 也可以用于获取单个 DOM元素，如下：

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const domRef = ref(null);
onMounted(() => {
  console.log(domRef.value); //  <div>Hello</div>
})
</script>

<template>
  <!-- ref -->
  <div ref="domRef">Hello</div>
</template>
```

### 1.2. `reactive()`

返回对象的响应式副本。

```vue
<script setup lang="ts">
import { reactive } from 'vue';
// -- 定义变量
let obj = reactive({
  count: 0,
});

// -- 事件处理函数
const increment = () => {
  obj.count++;
};
</script>

<template>
  <!-- 绑定数据 -->
  <div>obj.count：{{ obj.count }}</div>
  <button type="button" @click="increment">increment</button>
</template>
```

> 提示：`reactive` 一般用于对象类型。

### 1.3. `toRefs()`

将响应式对象转换为普通对象，其中结果对象的每个属性都是指向原始对象相应属性的  [`ref`](https://v3.cn.vuejs.org/api/refs-api.html#ref)。

```vue
<script setup lang="ts">
import { reactive, toRefs } from 'vue';
    
const state = reactive({
  name: 'Li-HONGYAO',
  age: 18,
});
const stateAsRefs = toRefs(state);

/**
stateAsRefs 的类型:
{
  name: Ref<string>,
  age: Ref<number>
}*/
// ref 和原始 property 已经“链接”起来了
state.age++;
console.log(stateAsRefs.age.value); // 19

stateAsRefs.age.value++;
console.log(state.age); // 20

</script>


```

小妙招：在一个页面中，通常会有多个状态（`state`），比如用户信息、登录状态等等，你可能会定义多个 `ref` 或者 `reactive` 变量来保存这些信息，在 vue2.x，属性一般统一定义在 `data` 选项中集中管理，如果你也想将一个页面的状态统一定义在一个 `state` 变量中，可以这么做：

```typescript
const state = reactive({
  loginStatus: 0,
  user: {
    name: 'Li-HONGYAO',
    job: '前端工程师',
    address: '成都市高新区',
  },
});
```

然后在模板中访问：

```vue
<div>loginStatus：{{ state.loginStatus ? '已登录' : '未登录' }}</div>
<div>Name：{{ state.user.name }}</div>
<div>job：{{ state.user.job }}</div>
<div>address：{{ state.user.job }}</div>
```

但是你可能会觉得，每次访问属性都需要通过 `state.xxx`，是否可以通过某种形式直接访问属性呢？答案是肯定有的，我们可以通过 `toRefs` 来改造。

```typescript
const { loginStatus, user } = toRefs(state);
```

然后就可以在模板中直接访问 `loginStatus` 和 `user` 了。

## 2. 响应式原理

### 2.1. 定义

**响应式**：组件 data 的数据一旦变化，立刻触发视图的更新。它是实现数据驱动视图的第一步。

### 2.2. 监听data变化的核心API

Vue 实现响应式的一个核心 API 是 `Object.defineProperty`。该方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

基本用法：

```javascript
const data = {};
const name = 'Li-HONGYAO';
Object.defineProperty(data, 'name', {
  get: function () {
    console.log('__get__');
    return name;
  },
  set: function (newVal) {
    console.log('__set__');
    console.log(newVal);
  },
});

console.log(data.name);
data.name = '李鴻耀同學';
```

利用 `Object.defineProperty` 重写 `get` 和 `set`，将对象属性的赋值和获取变成函数，我们可以实现一个简单的双向绑定。

### 2.3. 如何监听 data 变化

共定义了三个函数：

- `updateView`：模拟 Vue 更新视图的入口函数。
- `defineReactive`：对数据进行监听的具体实现。
- `observer`：调用该函数后，可对目标对象进行监听，将目标对象编程响应式的。

执行逻辑为：  

定义一个对象 `data` → 调用 `observer(data)` 将对象变成响应式的 → 修改对象内的属性 → 更新视图

```javascript
// -- 触发更新视图
function updateView() {
  console.log('视图更新');
}

// -- 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 核心API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 设置新值（注意：value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值）
        value = newValue;
        // 触发更新视图
        updateView();
      }
    },
  });
}

// -- 监听对象属性
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    // 监听的不是对象或数组时，直接返回
    return target;
  }
  // 重新定义各个属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
```

测试一下，会打印出两个 “视图更新” 字符串！

```javascript
// -- 准备数据
const data = {
  name: 'Li-HONGYAO',
  address: '成都市武侯区',
};

// -- 监听数据
observer(data);

// -- 修改数据
data.name = '李鴻耀同學';
data.address = '成都市高新区';
```

### 2.4. 如何深度监听 data 变化？

对于有嵌套属性的数据，例如：

```javascript
const data = {
  name: 'Li-HONGYAO',
  address: '成都市武侯区',
  info: {
    age: 28,
  },
};
```

要想监听到 `info.age` 的变化，则需要深度监听，修改 `defineReactive` 方法即可：

- 在刚进入 `defineReactive` 函数的时候，先调用 `observer` 对传进来的值进行判断，由于 `info` 是个对象，所以会对 `info` 遍历后再执行 `defineReactive`；而其它基本类型的值在 `observer` 中被直接返回。
- 在设置新值时也要对新值进行深度监听，原因是新值也可能是个对象，需要监听到它里面的属性。

```javascript
function defineReactive(target, key, value) {
  // 深度监听
  observer(value);

  // 核心API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue);
        // 设置新值（注意：value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值）
        value = newValue;
        // 触发更新视图
        updateView();
      }
    },
  });
}
```

### 2.5. `Object.defineProperty()` 缺点

- 深度监听时，需要 **递归** 到底，一次性计算量大；
- 无法监听新增属性/删除属性（所以开发中需要使用 `Vue.set` 和 `Vue.delete` 这两个 API 来增删 data 的属性）；
- 无法原生监听数组，需要特殊处理；

### 2.6. 如何监听数组变化

[由于性能原因 >>](https://segmentfault.com/a/1190000015783546)，Vue 不是通过 `Object.defineProperty` 来监听数组的。

对于数组，是通过重写数组方法来实现，共修改了两处：

- 对原生数组原型做一个备份（防止后续的操作污染原生数组原型），基于这个备份创建一个新的数组，并扩展（在执行原方法前触发一次视图更新）它的方法。
- `observer` 方法中，增加对数组的处理。

执行逻辑为：  

定义一个对象 `data` → 调用 `observer(data)` ，在内部判断 `data` 是对象，则遍历该对象的每个属性并依次执行 `defineReactive`→ `defineReactive` 内部的 `observer(value)` 碰到数组 `nums`，则将该数组的隐式原型赋值成我们重写之后的原型；除 `nums` 外的其它类型属性，走之前的逻辑 → 更新视图

```javascript
// -- 触发更新视图
function updateView() {
  console.log('视图更新');
}

// ++++++++++++++++++++++
// -- 重新定义数组原型
var __proto__;
(function () {
  const oldArrayProperty = Array.prototype;
  // 创建新对象，原型指向 oldArrayProperty ，再扩展新的方法不会影响原型
  __proto__ = Object.create(oldArrayProperty);
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((methodName) => {
    __proto__[methodName] = function () {
      updateView(); // 触发视图更新
      oldArrayProperty[methodName].call(this, ...arguments);
    };
  });
})();
// ++++++++++++++++++++++

// -- 重新定义属性，监听起来
function defineReactive(target, key, value) {
  // 深度监听
  observer(value);

  // 核心API
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        // 深度监听
        observer(newValue);
        // 设置新值（注意：value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值）
        value = newValue;
        // 触发更新视图
        updateView();
      }
    },
  });
}

// -- 监听对象属性
function observer(target) {
  if (typeof target !== 'object' || target === null) {
    // 监听的不是对象或数组时，直接返回
    return target;
  }
  // ++++++++++++++++++++++
  if (Array.isArray(target)) {
    target.__proto__ = __proto__;
  }
  // ++++++++++++++++++++++

  // 重新定义各个属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
```

测试一下，执行 `data.nums.push(4)` 时会打印出 `"视图更新"` 字符串并在数组末尾添加进元素。

```javascript
// -- 准备数据
const data = {
  name: 'Li-HONGYAO',
  address: '成都市武侯区',
  info: {
    age: 28,
  },
  nums: [1, 2, 3],
};

// -- 监听数据
observer(data);

// -- 修改数据
data.nums.push(4);
```

### 2.7. 原理概述

> **@2.x**

整体思路是：**数据劫持** + **观察者模式**

对象内部通过 `defineReactive` 方法，使用 `Object.defineProperty` 将属性进行劫持（只会劫持已存在的属性），数组则是通过重写数组来实现。当页面使用对应属性时，每个属性都拥有自己的 `dep` 属性，存在它所依赖的 `watcher` （依赖收集）`get`，当属性变化后会通知自己对应的 `watcher` 去更新（派发更新）`set`。

1）`Object.defineProperty` 数据劫持
2）使用 `getter` 收集依赖 ，`setter` 通知 `watcher` 派发更新。
3）`watcher` 发布订阅模式

![](./IMGS/response-yuanli.jpg)

深入理解：

- **监听器 Observer**：对数据对象进行遍历，包括子属性对象的属性，利用 `Object.defineProperty()` 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
- **解析器 Compile**：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
- **订阅者 Watcher**：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新——这是一个典型的观察者模式
- **订阅器 Dep**：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

> **@3.x**

Vue3.x 改用 `Proxy` 替代`Object.defineProperty`，因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。

**Proxy 只会代理对象的第一层，Vue3 是怎样处理这个问题的呢?**

判断当前 `Reflect.ge`t 的返回值是否为Object，如果是则再通过 `reactive` 方法做代理， 这样就实现了深度观测。

**监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？**

我们可以判断 `key` 是否为当前被代理对象 `target` 自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行 `trigger`。

## 3. 数据双向绑定

`Vue.js` 最核心的功能有两个：

- 响应式的数据绑定系统
- 组件系统

> 什么是数据双向绑定？

`Vue` 是一个 `MVVM` 框架，即数据双向绑定。当数据发生变化的时候，触发视图更新；当视图发生变化的时候，触发数据更新。

> 为什么要实现数据的双向绑定？

在 Vue 中，如果使用 VueX，实际上数据还是单向的，之所以说是数据双向绑定，这是从使用UI控件来说，对于我们处理表单，Vue的双向数据绑定用起来就特别舒服了。

即两者并不互斥， 在全局性数据流使用单向，方便跟踪； 局部性数据流使用双向，简单易操作。

### 3.1. 访问器属性

`Object.defineProperty()` 函数可以定义对象的属性相关描述符， 其中的 `set` 和 `get` 函数对于完成数据双向绑定起到了至关重要的作用，下面，我们看看这个函数的基本使用方式。

```javascript
var obj = {
  foo: 'foo',
};

Object.defineProperty(obj, 'foo', {
  get: function () {
    console.log('将要读取obj.foo属性');
  },
  set: function (newVal) {
    console.log('当前值为', newVal);
  },
});

obj.foo; // 将要读取obj.foo属性
obj.foo = 'name'; // 当前值为 name
```

可以看到，`get` 即为我们访问属性时调用，`set` 为我们设置属性值时调用。

### 3.2. 简单的数据双向绑定实现方法

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>数据双向绑定</title>
  </head>
  <body>
    <form autocomplete="off">
      <label>输入：</label>
      <input type="text" id="textInput" style="outline: none" />
      <br /><br />
      <label>输出：</label>
      <span id="textSpan"></span>
    </form>
    <script>
      // -- 获取DOM元素
      const textInput = document.getElementById('textInput');
      const textSpan = document.getElementById('textSpan');
      // -- 定义数据模型
      const data = { value: 'Hello' };
      textInput.value = data.value;
      textSpan.textContent = data.value;
      // -- 数据劫持
      Object.defineProperty(data, 'value', {
        set: function (newValue) {
          textInput.value = newValue;
          textSpan.textContent = newValue;
        },
        get: function () {},
      });
      // -- 监听用户操作
      textInput.addEventListener('input', function ({ target: { value } }) {
        data.value = value;
      });
    </script>
  </body>
</html>
```



![](./IMGS/bindings.gif)

可以看到，实现一个简单的数据双向绑定还是不难的： 使用 `Object.defineProperty()` 来定义属性的 `set` 函数，属性被赋值的时候，修改 `input` 的 `value` 值以及 `span` 标签的 `textContent`；然后监听 `input` 的 `input` 事件，修改对象的属性值，即可实现这样的一个简单的数据双向绑定。

### 3.3. 实现任务的思路

上面我们只是实现了一个最简单的数据双向绑定，而我们真正希望实现的是下面这种方式：

```vue
<div id="app">
  <input type="text" v-model="message" />
  {{ text }}
</div>

<script>
  var vm = new Vue({
    el: '#app',
    data: {
      message: 'Hello，Vue.js',
    },
  });
</script>
```

即和 `Vue` 一样的方式来实现数据的双向绑定。那么，**我们可以把整个实现过程分为下面几步： **

- 输入框以及文本节点与 `data` 中的数据 **绑定**；
- 输入框内容变化时，data 中的数据同步变化，即 `view` → `model` 的变化；
- `data` 中的数据变化时，文本节点的内容同步变化，即 `model` → `view` 的变化；

### 3.4. DocumentFragment

如果希望实现任务一，我们还需要使用到 `DocumentFragment` 文档片段，可以把它看做一个容器，如下所示：

```html
<div id="app"></div>
<script>
  const flag = document.createDocumentFragment();
  const span = document.createElement('span');
  const textNode = document.createTextNode('Hello, Vue.js!');
  span.appendChild(textNode);
  flag.append(span);
  document.getElementById('app').appendChild(flag);
</script>
```

这样，我们就可以得到下面的DOM树：

![](./IMGS/dom_tree.PNG)

使用文档片段的好处在于：在文档片段上进行操作DOM，而不会影响到真实的DOM，操作完成之后，我们就可以添加到真实DOM上，这样的效率比直接在正式DOM上修改要高很多 。

> Tips：`Vue` 进行编译时，就是将挂载目标的所有子节点劫持到 `DocumentFragment` 中，经过一番处理之后，再将 `DocumentFragment` 整体返回插入挂载目标。

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="app">
      <input type="text" id="a" />
      <span id="b"></span>
    </div>
    <script>
      var dom = nodeToFragment(document.getElementById('app'));
      console.log(dom);
      function nodeToFragment(node) {
        var flag = document.createDocumentFragment();
        var child; 
        while ((child = node.firstChild)) {
          flag.appendChild(child);
        }
        return flag;
      }
      document.getElementById('app').appendChild(dom);
    </script>
  </body>
</html>
```

即首先获取到 `div`，然后通过 `documentFragment` 劫持，接着再把这个文档片段添加到 `div` 上去。

### 3.5. 初始化数据绑定

# 三、生命周期

## @概述

每个 Vue 实例在被创建之前都要经过一系列的初始化过程，在这个过程中也会运行一些叫做 **生命周期钩子** 的函数，给予用户机会在一些特定的场景下添加他们自己的代码。

![](./IMGS/lifecycle.png)

- `beforeCreate`：在实例初始化之后，数据观测（data observe ）和 `event`/`watcher` 事件配置之前同步调用，在当前阶段 `data`、`methods`、`computed` 以及 `watch` 上的数据和方法都不能被访问。
- `creared`：实例已经创建完成之后被调用。在这一步，实例已经完成以下的配置：数据观测（data observe ），属性和方法的运算，watch/event 事件回调。这里没有 `$el`，如果非要想与 DOM 进行交互，可以通过 `vm.$nextTick` 来访问 DOM。
- `beforeMount`：在挂载开始之前被调用：相关的 `render` 函数首次被调用。
- `mounted`：挂载完成后发生，在当前阶段，真实的 DOM挂载完毕，数据完成双向绑定，可以访问到 DOM 节点。
- `beforeUpdate`：数据更新时调用，发生在虚拟 DOM 重新渲染之前。可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
- `updated`：发生在更新完成之后，当前阶段组件 DOM 已经完成更新。要注意的是避免在此期间更新数据，因为这个可能导致无限循环的更新，该钩子在服务器渲染期间不被调用。
- `activated`：被 `keep-alive` 缓存的组件激活时调用。
- `deactivated`：被 `keep-alive` 缓存的组件失活时调用。
- `beforeUnmount`：实例销毁之前调用。在这一步，实力仍然完全可用。我们可以在这时进行 善后收尾工作，比如清除定时器（3.x之前為：`beforeDestroy`）。
- `unmounted`： Vue实例销毁后调用，调用此钩子时，组件实例的所有指令都被解除绑定，所有事件侦听器都被移除，所有子组件实例被卸载（3.x之前為：`destroyed`）

## @`<script setup>`

1. `beforeCreate` -> setup()
2. `created` -> `setup()`

生命周期函数调用：`on + 生命周期钩子函数名`，如 `mounted` 在 `setup` 中调用为：`onMounted`

## @代码示例

> `app.vue`

```vue
<!-- 脚本 -->
<script setup lang="ts">

import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

console.log('__setup__');

onBeforeMount(() => {
  console.log('__onBeforeMount__');
});
onMounted(() => {
  console.log('__onMounted__');
});
onBeforeUpdate(() => {
  console.log('__onBeforeUpdate__');
});
onUpdated(() => {
  console.log('__onUpdated__');
});
onBeforeUnmount(() => {
  console.log('__onBeforeUnmount__');
});
onUnmounted(() => {
  console.log('__onUnmounted__');
});


</script>

<!-- 模板 -->
<template>
  <div class="app">Hello, Vue3.x!</div>
</template>

<!-- 样式 -->
<style scoped></style>
```