参考：

- [Axios 中文说明](https://www.kancloud.cn/yunye/axios/234845)
- [DATA API](http://www.wwtliu.com/sxtstu/)

# # 概述

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

**\> 特性：**

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

```js
// 导入axios
import Axios from 'axios'
// 将axios挂载到Vue上
Vue.prototype.$axios = Axios
```

> 提示：
>
> -> 可以在plugins中全局引入 axios。
>
> -> axios 请求需挂载在 **create** 生命周期钩子上。

# # 示例

## 1. GET

```javascript
// 请求示例地址参考：
// -> http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php
// -> http://www.wwtliu.com/sxtstu/news/juhenews.php?type=junshi&count=30

this.$axios.get('url', {
  params: {
    // get 参数可放置于此字段中，key-value对形式设置
    // 一般建议这么做，便于控制
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
// 请求地址：
// -> http://www.wwtliu.com/sxtstu/blueberrypai/login.php
// 请求参数：
// user_id:'iwen@qq.com',
// password: 'iwen123',
// verification_code: 'crfvw'

this.$axios.post('url', {
  // post 参数直接在第2个参数中以key-value对形式设置
})
.then(res => {
  console.log(res)
})
.catch(error => {
  console.log(error);
})
```

> 注意：
>
> form-data：?name=LiHongyao&age=25
>
> x-www-form-urlencode：{name=LiHongyao, age=25}
>
> axios 接受的post请求参数格式是 form-data 格式，
>
> 如何将 x-www-form-urlencode 转换为 form-data 格式呢？操作如下：
>
> stips1 -> 首先你需要引入 **qs** 库，qs库无需安装，直接引入即可：
>
> ```js
> import Qs from 'qs';
> ```
>
> stips2 -> 在使用 axios.post 请求时使用 Qs.stringify() 方法包裹传递参数即可进行转换：
>
> ```js
> this.$axios.post('url',Qs.stringify({
> 	// 请求参数key-value对
> }))
> .then(res => {
>   console.log(res);
> }).catch(error => {
>   console.log(error);
> })
> ```

# # 全局默认配置

main.js

```js
Axios.defaults.baseURL = 'https://api.example.com';
Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

全局配置的好处在于在请求当前域名下的资源时，我们无需在加域名，只需要写资源相对路径即可。

# # 拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```javascript
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log("请求：" + config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log("响应：" + response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
```

为什么需要拦截器呢？拦截器可以做什么事情？

我们可以通过拦截器判断参数是否合理？请求有没有问题？请求的数据是否有问题？

比如，我们之前对数据进行请求时，需要对请求参数做转换，我们可以把转换的逻辑扔在拦截器中进行处理，如下所示：

```js
import Qs from 'qs';
Axios.interceptors.request.use(function (config) {
  if(config.method == 'post') {
    config.data = Qs.stringify(config.data);
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
```

这样一来，我们就相当于全局配置了请求设置，而无需在每一次请求时设置了。

# # 跨域解决方案

我们以豆瓣跨域请求为例：

【[豆瓣API](https://developers.douban.com/wiki/?title=guide)】

1. 修改 ./config/index.js 文件：

```js
proxyTable: {
  '/api': {
    target: 'http://api.douban.com/v2',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  }
}
```

2. 在main.js 文件中添加host

```js
Vue.prototype.HOST = '/api'
```

3. 请求数据

```js
let url = this.HOST + '/movie/top250';
this.$axios.get(url, {
  params: {
    count: 10,
    start: 0
  }
})
.then(res => {
  console.log(res);
}).catch(error => {
  console.log(error);
})
```

> 注意：此种跨域解决方案，只适用于测试阶段，打包的时候，不具备服务器，就不能跨域了，交给后端处理。产品上线之后，就不存在跨域问题啦。

> 提示：一旦修改了配置文件，需重新执行‘npm run dev’，否则配置不生效。













