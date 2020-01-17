参考：

- [Axios 中文文档 >>](http://www.axios-js.com/)

- [Axios 中文说明 >>](https://www.kancloud.cn/yunye/axios/234845)
- [DATA API](http://www.wwtliu.com/sxtstu/)

# 一、概述

Axios 是一个基于 promise 的易用、简洁且高效的http库 

**\> 特性：**

- 支持node端和浏览器端：同样的API，node和浏览器全支持，平台切换无压力
- 支持Promise：使用Promise管理异步，告别传统callback方式
- 丰富的配置项：支持拦截器等高级配置
- 社区支持：axios相关的npm包数量一直在增长

> 提示：引自官网

# 二、安装

```shell
# NPM
$ npm install axios
# YARN
$ yarn add  axios
```

# 三、引入

```js
// 1. 通过Webpack全局导入
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

## 1. GET 

```javascript
// => 1. 直接将请求参数拼接在资源地址后面
const URI = "http://192.168.110.65:8090/info?id=1&city=chengdu";
this.$axios.get(URI).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err.message);
});


// => 2. 通过params配置请求参数
const URI = "http://192.168.110.65:8090/info";
this.$axios.get(URI, {
	params: {
		id: 1,
		city: "chengdu"
	}
}).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err.message);
});
```

## 2. POST 

```javascript
const URI = "http://192.168.110.65:8090/login"
this.$axios.post(URI, {
	username: "lihy",
	password: "123"
}).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err.message)
});

```

> 提示：POST请求参数不需要使用params字段。

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
const URI = "http://192.168.110.65:8090/login"
this.$axios.post(URI, Qs.stringify({
	username: "lihy",
	password: "123"
})).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err.message)
});
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
// => 1. 添加请求拦截器
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// => 2. 添加响应拦截器
Axios.interceptors.response.use(res => {
  // 在发送请求之前做些什么
  console.log(res)
  return res;
}, error => {
  // 对请求错误做些什么
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









