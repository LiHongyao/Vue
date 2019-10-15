# 一、简介

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

# 二、绑定 HTML Class

## 1、对象语法

1）、我们可以为 `v-bind:class`  设置一个对象，从而动态的切换 class。

```html
<div id="app">
    <div :class="{'active': isActive, 'error':hasError}"></div>
</div>
```

```javascript
var app = new Vue({
    el: '#app',
    data: {
        isActive: false,
      	hasError: true
    },
})
```

> 语法：` v-bind:class="{className: prop,....}"`
>

2）、我们也可以直接绑定数据里的一个对象

```html
<div id="app">
    <div v-bind:class="classObj"></div>
</div>
```

```javascript
var app = new Vue({
    el: '#app',
    data: {
        classObj: {
            "active":true,
            "box":true
        }
    }
})
```

## 2、数组语法

我们可以把一个数组传递给 v-bind:class，如下所示

```html
<div id="app">
    <div :class="[class1, class2]"></div>
</div>
```

```javascript
var app = new Vue({
    el: '#app',
    data: {
        class1:"active",
        class2:"box"
    }
})
// <div class="active box"></div>
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

## 1、对象语法

通过 `v-bind:style ` 指令可直接设置样式。

```html
<div id="app">
    <h1 :style="{color, fontSize}">Hello, World!</h1>
</div>
```

```javascript
var app = new Vue({
    el: '#app',
    data: {
        color:"red",
        fontSize: "36px"
    }
})
```

也可以直接设置一个样式对象

```html
<div id="app">
    <h1 :style="styleObj">Hello, World!</h1>
</div>
```

```javascript
var app = new Vue({
    el: '#app',
    data: {
        styleObj: {
            color: "red",
            fontSize: "36px"
        }
    }
})
```

## 2、数组语法

还可以使用数组将多个样式对象应用到一个元素上

```html
<div id="app">
    <h1 :style="[style1, style2]">Hello, World!</h1>
</div>
```

```javascript
var app = new Vue({
    el: '#app',
    data: {
        style1: {
            color: "blue",
            fontSize: "36px"
        },
        style2: {
            textDecoration: "underline"
        }
    }
})
```

## 3、自动添加前缀

当 `:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS 属性时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。

## 4、多重值

从 2.3.0 起你可以为 `style` 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。





















