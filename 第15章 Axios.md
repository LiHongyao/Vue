参考：

- [Axios 中文文档](https://www.kancloud.cn/yunye/axios/234845)
- [DATA API](http://www.wwtliu.com/sxtstu/)

# 一、概述

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

# 二、安装 *

```shell
# NPM
$ npm install axios
# YARN
$ yarn add  axios
```

# 三、引入	 *

```js
// 1. 通过Webpack plugins全局导入
new webpack.ProvidePlugin({
  Axios: 'axios',
});
// 2. ES6
import Axios from 'axios';
// 3. commonJS
const Axios = require('axios');
```

导入之后，将axios挂在到Vue的实例上：

```js
Vue.prototype.$axios = Axios
```

> 提示：
>
> - axios 请求一般在 **create** 生命周期钩子上进行。

# 四、示例

API 参考：<https://www.showapi.com/>

## 1. GET *

```javascript
// => 直接将请求参数拼接在资源地址后面
const url = "http://10.2.1.2:8081/phones?pages=1&size=8";
this.$axios.get(url).then(res => {
  // 请求成功
  console.log(res);
}).catch(err => {
  // 请求失败
  console.log(err.message);
})
// => 通过params配置请求参数
const url = "http://10.2.1.2:8081/phones";
const params = {
  pages: 1,
  size: 8
};
this.$axios.get(url, {
  params
}).then(res => {
  // 请求成功
  console.log(res);
}).catch(err => {
  // 请求失败
  console.log(err.message);
})
```

## 2. POST *

```javascript
this.$axios.post(url, {
  // post 参数直接在第2个参数中以key-value对形式设置
})
.then(res => {
  console.log(res)
})
.catch(error => {
  console.log(error);
})
```

## 3. 并发请求

```js
function getOrders() {
  return axios.get('/orders');
}
function getArticles() {
  return axios.get('/articles/');
}

axios.all([getOrders(), getArticles()])
  .then(axios.spread(function (orders, articles) {
    // 两个请求现在都执行完成
  }));
```

# 五、参数传输格式

参数传输格式主要有两种：

- form-data：?pages=1&size=8

- x-www-form-urlencode：{pages:1, size=8}

如果要将  x-www-form-urlencode 转换为 form-data 格式操作如下：

\1.  -> 首先你需要引入 **qs** 库，qs库无需安装，直接引入即可：

```js
import Qs from 'qs';
```

\2. -> 在使用 axios.post 请求时使用 Qs.stringify() 方法包裹传递参数即可进行转换：

```js
this.$axios.post('url',Qs.stringify({
	// 请求参数key-value对
}))
.then(res => {
	console.log(res);
}).catch(error => {
	console.log(error);
})
```

# 六、全局默认配置

你可以指定将被用在各个请求的配置默认值

```js
Axios.defaults.baseURL = 'https://api.example.com';
Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

全局配置的好处在于在请求当前域名下的资源时，我们无需在加域名，只需要写资源相对路径即可。

# 七、拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```javascript
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log( config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
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

# 八、跨域解决方案

## 1. Vue-cli 3.x 之前

1. 修改 ./config/index.js 文件：

```js
proxyTable: {
  '/api': {
    target: 'http://api.douban.com/v2', // 跨域地址
    changeOrigin: true, // 是否跨域
    secure: false, // 是否使用https
    pathRewrite: {
      '^/api': '/api'
    }
  }
}
```

2. 在main.js 设置基础路径

```js
Axios.defaults.baseURL = "/api";
```

3. 请求数据

```js
this.$axios.get("/movie/top250", {
  params: { count: 10, start: 0}
})
.then(res => {
  console.log(res);
}).catch(error => {
  console.log(error);
})
```

> 注意：此种跨域解决方案，只适用于测试阶段，打包的时候，不具备服务器，就不能跨域了，交给后端处理。产品上线之后，就不存在跨域问题啦。

> 提示：一旦修改了配置文件，需重新执行‘npm run dev’，否则配置不生效。

## 2. Vue-cli 3.x 之后

1. 在根目录创建 vue.config.js ，配置如下：

```js
module.exports = {
    dev: {
        proxyTable: {
            '/api': {
                target: 'http://api.douban.com/v2', // 跨域地址
                changeOrigin: true, // 是否跨域
                secure: false, // 是否使用https
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }
}
```











