http://mockjs.com/

# # 概述

Mock -> 数据模拟

1. 自己创建JSON文件，使用get请求形式访问数据

   优点：方便、快捷

   缺点：只能存在get请求

2. 项目中集成服务器模拟各种接口

   优点：模拟真实线上环境

   缺点：增加开发成本

3. 直接使用线上数据

   优点：真实

   缺点：不一定每个项目都存在

# # Mock 特性

- 前后端分离
- 增加单元测试的真实性
- 开发无侵入
- 用法简单
- 数据类型丰富
- 方便扩展

# #  安装 & 导入

```shell
$ npm install mockjs
```

```js
const Mock = require("mockjs");
```

# # 使用

```js
let data = Mock.mock({
  "list|1-10":[{
    "id|+1":1,
    "name":"@cname"
  }]
})
console.log(data);
```

参考示例：<http://mockjs.com/examples.html>


























