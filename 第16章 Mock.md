http://mockjs.com/

# 一、概述

Mock -> 数据模拟

生成随机数据，拦截 Ajax 请求

1. 自己创建JSON文件，使用get请求形式访问数据

   优点：方便、快捷

   缺点：只能存在get请求

2. 项目中集成服务器模拟各种接口

   优点：模拟真实线上环境

   缺点：增加开发成本

3. 直接使用线上数据

   优点：真实

   缺点：不一定每个项目都存在

# 二、Mock 特性

- 前后端分离
- 增加单元测试的真实性
- 开发无侵入
- 用法简单
- 数据类型丰富
- 方便扩展

# 三、安装 & 导入

```shell
$ npm install mockjs
```

```js
const Mock = require("mockjs");
```

# 四、使用

```js
let data = Mock.mock({
  "list|1-10":[{
    "id|+1":1,
    "name":"@cname",
  }]
})
console.log(data);
```

参考示例：

<http://mockjs.com/examples.html>

https://www.jianshu.com/p/4579f40e6108

# 五、规范

数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值

```js
// 属性名   name
// 生成规则 rule
// 属性值   value
"name|rule": value
```

> 注意：
>
> - 属性名 和 生成规则 之间用竖线 | 分隔。
> - 生成规则 是可选的。
> - 生成规则 有 7 种格式

# 六、小技巧

在vue中的导入小技巧：

```js
// 导入
Vue.prototype.$mock  = require("mockjs").mock;
// 使用
this.$mock({
  // 配置项
});
```


























