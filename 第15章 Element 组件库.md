[参考：官网地址](http://element-cn.eleme.io/#/zh-CN)

# # 概述

Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库

# # 安装

```shell
$ npm i element-ui -S
```

# # 引入

官网[引入示例](http://element-cn.eleme.io/#/zh-CN/component/quickstart)给出了按需引入和完整引入两种方式，为了减小项目体积，建议使用按需引入的方式。那我们就需要借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，首先我们需要进行安装：

```shell
$ npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入需要使用的插件
import { 
  Button, 
  Select 
} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```

完整组件引入方式，请参考 [components.json](https://github.com/ElemeFE/element/blob/master/components.json) 文件。

# # 使用

参考 [官网组件示例](http://element-cn.eleme.io/#/zh-CN/component/) ，将鼠标放置在您需要使用的组件上，会出现 **显示代码** 按钮，点击该按钮，即可浏览代码实现，我们只需复制其结构和样式再加以自定义的配置即可。

如果您需要自定义样式，可鼠标右键审查元素，查看对应生成元素的class，拿到class类名之后即可进行相应样式设置。





















