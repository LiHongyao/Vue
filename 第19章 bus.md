# 一、概述

在非父子组件的通信中，如果我们的项目不大，一般不适用vuex，而是使用bus（中央事件总线）。

通过bus可以为一个简单的组件传递数据，用于解决跨级和兄弟组件之间的通信问题。

## 二、安装

https://www.npmjs.com/package/vue-bus

```shell
$ yarn add vue-bus
$ npm install vue-bus --save
```

# 三、引入

```js
// main.js
import Vue from 'vue';
import VueBus from 'vue-bus';

Vue.use(VueBus);
```

# 四、使用





