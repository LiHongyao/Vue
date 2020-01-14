参考：

- https://vuex.vuejs.org/zh/

# 一、概述

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化（这句话简单理解就是组件数据共享）。Vuex 也集成到 Vue 的官方调试工具 [devtools extension](https://github.com/vuejs/vue-devtools)，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

## 1、什么情况下使用vuex

虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 [global event bus](https://cn.vuejs.org/v2/guide/components.html#%E9%9D%9E%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1) 就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：

> Flux 架构就像眼镜：您自会知道什么时候需要它。

## 2、vuex 状态管理

- State：驱动视图的数据源（不能直接修改state）
- Mutate：修改数据源
- Action：提交Mutations（异步）

View -> [（Dispatch）Action  ] -> （Commit）Mutations -> （Mutate）state -> View

![](./IMGS/vuex.png)

注意：Action 不是必需品，如果有异步操做才可能用到Action，否则可以不使用。

# 二、回顾

父子组件之间数据传递

父 -> 子：props

子 -> 父：$emit(key, value)

# 三、安装/引用

```shell
# NPM
$ npm install vuex
# YARN 
$ yarn add vuex
```

在一个模块化的打包系统中，您必须显式地通过 `Vue.use()` 来安装 Vuex：

-> ./src/store/index.js

```js
import Vue  from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
```

# 四、开始

每一个 Vuex 应用的核心就是 store（仓库）。store 基本上就是一个容器，它包含着你的应用中大部分的**状态 (state)**。Vuex 和单纯的全局对象有以下两点不同：

- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
- 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地 **提交 (commit) mutation**。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。

[安装](https://vuex.vuejs.org/zh/installation.html) Vuex 之后，让我们来创建一个 store。

-> ./src/store/index.js

```js
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```

> 注意：一定要在将store注入到vue实例中，如下所示：

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

现在，你已经创建好一个 store 仓库。关于store 仓库的一些配置，请参考核心概念。

# 五、核心概念

## 1. State *

Vuex 使用**单一状态树**，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 ([SSOT](https://en.wikipedia.org/wiki/Single_source_of_truth))”而存在。这也意味着，每个应用将仅仅包含一个 store 实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。

我们定义一个状态属性，如下所示：

```js
state: {
  message: "Hello, Vuex!"
},
```

这样，我们就可以在任意组件中获取到该状态值啦，获取方式如下：

```js
this.$store.state.count
```

### 1.1. mapState

当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 `mapState` 辅助函数帮助我们生成计算属性，让你少按几次键：

```js
state: {
  message: "Hello, vuex!",
  name: "木子李",
  job: "前端工程师",
  tel: "17398888669"
}
```

```js
import { mapState } from 'vuex'
export default {
  computed: mapState({
    // 写法1：箭头函数可使代码更简练
    message: state => state.message,
    // 写法2：传字符串参数 'name' 等同于 'state => state.name'
    name: "name",
    // 写法3：为了能够使用 `this` 获取局部状态（组件实例），必须使用常规函数
    job(state) {
      return state.num + this.prop;
    }
  })
};
```

当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 `mapState` 传一个字符串数组。

```js
computed: mapState(["message", "name", "job", "tel"])
```

### 1.2. 对象展开运算符 *

`mapState` 函数返回的是一个对象。我们如何将它与局部计算属性混合使用呢？通常，我们需要使用一个工具函数将多个对象合并为一个，以使我们可以将最终对象传给 `computed` 属性。但是自从有了[对象展开运算符](https://github.com/sebmarkbage/ecmascript-rest-spread)（现处于 ECMAScript 提案 stage-4 阶段），我们可以极大地简化写法：

```js
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["message", "name", "job", "tel"])
  }
};
```

> 提示：使用 Vuex 并不意味着你需要将**所有的**状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。

## 2. Getter

Vuex 允许我们在 store 中定义 getter（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

```js
getters: {
  birth: (state) => {
    let idCard = state.idCard;
    let year = idCard.slice(6, 10);
    let month = idCard.slice(10, 12);
    let day = idCard.slice(12, 14);
    return `${year}-${month}-${day}`
  }
},
```

通过属性访问：

```js
this.$store.getters.birth
```

通过辅助函数访问：

```js
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['birth'])
  }
}
```

## 3. Mutation *

更改 Vuex 的 store 中的状态的 唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 和 一个 回调函数 。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：

```js
mutations: {
  modifyName(state, payload) {
    state.name = payload;
  }
}
```

触发mutaion：

```js
this.$store.commit("modifyName", "李鸿耀");
```

> 注意：一条重要的原则就是要记住 **mutation 必须是同步函数**

### 3.1. mapMutations

```js
import { mapMutations } from "vuex";

export default {
  created() {
    this.modifyName("李鸿耀");
  },
  methods: {
      ...mapMutations(["modifyName"])
  }
};
```

### 3.2.  响应规则

既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

1. 最好提前在你的 store 中初始化好所有所需属性。

2. 当需要在对象上添加新属性时，你应该

   - 使用 *Vue.set(obj, 'newProp', 123)* , 或者

   - 以新对象替换老对象。例如，利用 stage-3 的[对象展开运算符](https://github.com/sebmarkbage/ecmascript-rest-spread)我们可以这样写：

     ```js
     state.obj = { ...state.obj, newProp: 123 }
     ```

### 3.3. 使用常量

使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然：

```js
// mutation-types.js
export const MODIFY_NAME = "MODIFY_NAME";
```

```js
import Vue from 'vue'
import Vuex from 'vuex'
import {
  MODIFY_NAME
} from './mutation-types';

Vue.use(Vuex)

export default new Vuex.Store({
  state: { name: "木子李"}
  mutations: {
    [MODIFY_NAME](state, payload) {
      state.name = payload;
    }
  }
})
```

用不用常量取决于你——在需要多人协作的大型项目中，这会很有帮助。但如果你不喜欢，你完全可以不这样做。

## 4. Action *

Action 类似于 Mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

```js
{
	action: {
    // {commit, state, getters} = context;
		action_name(context, payload) {
			context.commit("mutation_name", payload);
		}
	}
}
```

分发Action

```js
this.$store.dispatch('action_name', payload);
```

### 4.1. mapActions

```js
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
      'incrementBy' 
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

## 5. modules

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

### 5.1. 模块的局部状态

对于模块内部的 mutation 和 getter，接收的第一个参数是**模块的局部状态对象**。

```js
const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {
      // 这里的 state 对象是模块的局部状态
      state.count++
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  }
}
```

同样，对于模块内部的 action，局部状态通过 `context.state` 暴露出来，根节点状态则为 `context.rootState`：

```js
const moduleA = {
  // ...
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
```

对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：

```js
const moduleA = {
  // ...
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
```

### 5.2. 命名空间

参考地址：https://vuex.vuejs.org/zh/guide/modules.html#命名空间

# 五、项目结构

Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

1. 应用层级的状态应该集中到单个 store 对象中。
2. 提交 **mutation** 是更改状态的唯一方法，并且这个过程是同步的。
3. 异步逻辑都应该封装到 **action** 里面。

只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

对于大型应用，我们会希望把 Vuex 相关代码分割到模块中。下面是项目结构示例：

```js
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```



# 六、总结

1. vuex 使用流程

```js
1. 安装
2. 引入
3. 创建
4. 配置
- state  状态属性
- mutaions 修改状态
- actions(可选) 提交修改(异步)
5. 访问状态：this.$store.state.属性名
6. 提交mutaions：this.$store.commit("", params.)
7. 提交actions：this.$store.dispatch("", params.)

# 简化操作
1. 
mapState: computed> ...mapState(["state_name"...])
this.state_name === this.$store.state.state_name

2. 
mapMutaions: methods> ...mapMutations(["mutaion_name"...])
this.mutaion_name() === this.$store.commit("mutaion_name");

3. 
mapActions: methods> ...mapActions(["action_name"...])
this.action_name() === this.$store.dispatch("action_name")
```























