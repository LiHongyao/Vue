参考：

- https://github.com/hilongjw/vue-lazyload

# # 概述

图片懒加载

# # 安装

```shell
$ npm install vue-lazyload -D
```

# # 引入

main.js

```js
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'require('dist/error.png')',
  loading: 'dist/loading.gif',
  attempt: 1
})

new Vue({
  el: '#app',
  components: {
    App
  }
})
```

# # 组件使用

```vue
<template>
    <div>
        <img v-lazy="imgObj"/>
    </div>
</template>

<script>
export default {
    name: 'lazy',
    data() {
        return {
            // 引入图片，如果实在js中，必须require进来
            imgObj: {
                src: 'http://img3.imgtn.bdimg.com/gp=0.jpg',
                error: require('../assets/error.jpeg'),
                loading: require('../assets/loading.gif')
            }
        }
    }
}
</script>

<style scoped>

</style>
```

























