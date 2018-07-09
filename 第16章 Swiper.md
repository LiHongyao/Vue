参考：

- https://github.com/surmon-china/vue-awesome-swiper
- http://www.swiper.com.cn/

# # 概述

Swiper常用于移动端网站的内容触摸滑动。

Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端。

Swiper能实现触屏焦点图、触屏Tab切换、触屏多图切换等常用效果。

Swiper开源、免费、稳定、使用简单、功能强大，是架构移动终端网站的重要选择！

# # 安装

```shell
$ npm install vue-awesome-swiper --save
```

# # 引入

**\> 全局引入：**

```js
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
```

**\> 局部引入：**

```js
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  }
}
```

# # 使用























