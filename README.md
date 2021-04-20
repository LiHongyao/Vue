官网地址：https://cn.vuejs.org/

# 一、概述

vue是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看[对比其它框架](https://cn.vuejs.org/v2/guide/comparison.html)。

# 二、兼容性

Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。Vue.js 支持所有[兼容 ECMAScript 5 的浏览器](http://caniuse.com/#feat=es5)。

# 三、安装

[安装参考地址 >>](https://v3.vuejs.org/guide/installation.html#release-notes)

1. [CDN >>](https://v3.vuejs.org/guide/installation.html#cdn)
2. [npm >>](https://v3.vuejs.org/guide/installation.html#npm)
3. [cli >>](https://v3.vuejs.org/guide/installation.html#cli)

全局安装：

```shell
$ npm install -g @vue/cli
```

查看版本：

```shell
$ vue --version
@vue/cli 4.5.11
```

创建项目：

```shell
$ vue create <project_name>
```
如果没有设置淘宝镜像，提示是否使用淘宝镜像：
```
?  Your connection to the default yarn registry seems to be slow.
   Use https://registry.npm.taobao.org for faster installation? (Y/n) 
```

选择默认配置：

```shell
? Please pick a preset: 
  Default ([Vue 2] babel, eslint)   # 默认配置
❯ Default (Vue 3 Preview) ([Vue 3] babel, eslint) 
  Manually select features  # 自定义配置
```
选择包管理工具：

```shell
? Pick the package manager to use when installing dependencies: (Use arrow keys)
❯ Use Yarn 
  Use NPM 
```

**选择自定义配置流程如下：**

通过按“空格”选择要安装的项：

```shell
Vue CLI v4.5.11
? Please pick a preset: Manually select features
? Check the features needed for your project: 
❯◉ Choose Vue version # 选择Vue版本
 ◉ Babel
 ◉ TypeScript # 支持TypeScript
 ◯ Progressive Web App (PWA) Support # 支持渐进式网页应用程序
 ◉ Router # 路由管理器
 ◉ Vuex  # 状态管理模式（构建一个中大型单页应用时）
 ◉ CSS Pre-processors  # css预处理
 ◉ Linter / Formatter # 代码风格、格式校验
 ◯ Unit Testing # 单元测试
 ◯ E2E Testing # （End To End）即端对端测试
```

选择Vue版本：

```
? Choose a version of Vue.js that you want to start the project with 
  2.x 
❯ 3.x (Preview) 
```

> 提示：这里我选择3.x

是否使用Class风格装饰器：

```
? Use class-style component syntax? No
```

使用Babel与TypeScript一起用于自动检测的填充：

```
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfi
lls, transpiling JSX)? Yes
```

是否使用历史路由模式：

```
? Use history mode for router? (Requires proper server setup for index fallback 
in production) Yes
```

选择CSS预编译，这里我选择使用Less：

```shell
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported 
by default): 
  Sass/SCSS (with dart-sass) 
  Sass/SCSS (with node-sass) 
❯ Less 
  Stylus 
```

选择 代码格式化检测 因为是用typescript 所以选择 TSLint

```shell
? Pick a linter / formatter config: 
  ESLint with error prevention only 
  ESLint + Airbnb config 
  ESLint + Standard config 
  ESLint + Prettier 
❯ TSLint (deprecated) 

? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i
> to invert selection)
❯◉ Lint on save # 保存时检查
 ◯ Lint and fix on commit  # 提交时检查
```

选择Babel、PostCSS、ESLint等配置文件的放置位置：

```shell
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files  # 在专用的配置文件中
  In package.json # package.json
```

是否保存预设：

```shell
? Save this as a preset for future projects? Yes
? Save preset as: # 输入预设
```

选择包管理工具：

```
? Pick the package manager to use when installing dependencies: (Use arrow keys)

❯ Use Yarn 
  Use NPM 
```

**启动项目：**

```shell
$ cd project_name
$ yarn serve
  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.101.113:8080/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```

> 提示：
>
> 安装过程中可能会遇到如下错误 " ERROR Error: Cannot find module 'vue-template-compiler'"，不用担心，直接在项目安装该依赖即可。

**# vue - ui**

vue 提供了 GUI 来构建项目，唤起指令入如下：

```shell
$ vue ui
```

**# 重点提示**

vue-cli 从3.x起 *webpack* 的配置已经被脚手架默认了，并不会显示。如果我们需要手动配置webpack的一些配置，可以手动创建配置文件。文件名为vue.config.js，此文件应该和package.json同级（创建之后会自动加载）,此文件需要按照JSON格式来撰写。

```js
// vue.config.js
module.exports = {
  // 选项...
}
```

比如：有时候我们前后端是分离情况下，在开发模式下，我们需要在vue.config.js中配置了。

```js
// vue config.js
module.exports = {
    devServer: {
        port: 8080,
        host: 'localhost',
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:2019',
                secure: false,
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            }
        }
    }
}
```

# 四、在线练习

在线练习：https://jsfiddle.net/chrisvfritz/50wL7mdz/

# 五、问题

**> 1. 关闭Eslint 代码检测**

在项目根目录创建 vue.config.js文件并添加如下代码：

```js
module.exports = {
	lintOnSave: false
}
```

或者在package.json文件中添加字段：

```js
"rules": {
	"no-console":"off"
}
```

























