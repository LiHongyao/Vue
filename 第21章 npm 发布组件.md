

# # 概述

你想发布一个自己的npm包么？你想让其他人都使用你的包么？

ok，那请看下面！

# # 创建自己的组件

1. 初始化项目

2. 修改 package.json 文件

   ```
   {
     "private": false,
     "main": "dist/vue-lhy-alertview.min.js"
   }
   ```

3. 修改 webpack.prod.config.js 文件

   - 修改out输出目录

     ```js
     output: {
       path: config.build.assetsRoot,
       publicPath: config.build.assetsPublicPath,
       filename: 'vue-lhy-alertview.min.js',
       library: 'VueLhyAlertView',
       libraryTarget: 'umd'
     }
     ```

   - 删除无用内容

4. 修改config/index.js 文件

   ```
   - assetsSubDirectory: 'static'
   + assetsSubDirectory: '/',
   ```

5. 修改输出

   - 修改 main.js 文件，输出自己的组件即可使用

     ```js
     // main.js
     import VueLhyAlertView from './components/LHYAlertView'
     export default VueLhyAlertView;
     ```

6. 修改 .gitignore 文件

   ```js
   - dist/
   ```

# # NPM 发布一个包

1. 点击 [前往官网](https://www.npmjs.com/) 注册账号；

2. CMD 下登录账号：

   ```shell
   $ npm login
   ```

3. 打包项目

   ```shell
   $ npm run build
   ```

4. 发布项目

   ```shell
   $ npm publish
   ```


至此，恭喜您，已经发布成功！

接下来您可以创建一个项目 npm install 你的包就可以使用啦。
















