# 一、简介

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

# 二、绑定 HTML Class

## 1、类型

```vue
<template>
  <!-- 变量绑定 -->
  <div :class="clsName"></div>
  <!-- 对象绑定 -->
  <div :class="{ active: isActive, error: hasError }"></div>
  <div :class="clsObj"></div>
  <!-- 数组绑定 -->
  <div :class="[activeCls, errorCls]"></div>
  <!-- 表达式绑定 -->
  <div :class="isActive ? 'active' : 'no-active'"></div>
</template>


<script>
export default {
  setup() {
    return {
      isActive: false,
      hasError: true,
      clsName: "wrap",
      clsObj: {
        wrap: true,
        bar: false,
        foo: true,
      },
      activeCls: "active",
      errorCls: "text-danger",
    };
  },
};
</script>
```

## 3、用在组件上

这里假设你对组件已经有了一定的了解。

当在一个自定义组件上使用 `class` 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。

例如，如果你声明了这个组件：

```javascript
Vue.component("my-component", {
   	template: "<p class='box raidus'>CHINA</p>" 
});
```

然后在使用它的时候添加一些 class：

```html
<my-component class="list"></my-component>
```

HTML 将被渲染为

```html
<p class='box raidus list'>CHINA</p>
```

对于带数据绑定 class 也同样适用：

```html
<my-component v-bind:class="{ active: isActive }"></my-component>
```

当 `isActive` 为 true 时，HTML 将被渲染成为：

```html
<p class='box raidus active'>CHINA</p>
```

# 三、绑定内联样式

## 1. 类型

```vue
<template>
  <!-- 对象绑定 -->
  <div :style="{ color }">Hello, Vue3.x!</div>
  <div :style="styleObj">Hello, Vue3.x!</div>
  <!-- 数组绑定 -->
  <div :style="[styleObj, baseStyle]">Hello, Vue3.x!</div>
</template>

<script>
export default {
  setup() {
    return {
      color: "blue",
      styleObj: {
        color: "orange",
      },
      baseStyle: {
        letterSpacing: "2px",
      },
    };
  },
};
</script>
```

## 2、自动添加前缀

当 `:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS 属性时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。

## 3、多重值

从 2.3.0 起你可以为 `style` 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。





















