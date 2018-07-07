参考：

- [Axios 中文说明](https://www.kancloud.cn/yunye/axios/234845)
- [DATA API](http://www.wwtliu.com/sxtstu/)

# # 概述

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## 1. 特性

- 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
- 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

# # 安装

```shell
$ npm i -S axios
```

# # 引入

```vue
// 导入axios
import Axios from 'axios'
// 将axios挂载到Vue上
Vue.prototype.$axios = Axios;
```

> 提示：
>
> -> 可以在plugins中全局引入 axios。
>
> -> axios 请求需挂载在 **create** 生命周期钩子上。

# # 示例

## 1. GET

```javascript
this.$axios.get('url', {
  params: {

  }
}).then(res => {
  console.log(res)
})
.catch(error => {
  console.log(error);
})
```

## 2. POST

```javascript
this.$axios.get('url', {
  paramKey1: paramVal1
  paramKey2: paramVal2
}).then(res => {
  console.log(res)
})
.catch(error => {
  console.log(error);
})
```



