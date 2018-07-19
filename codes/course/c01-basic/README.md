# 脚手架构建项目
- 安装 vue-cli：npm i -g vue-cli
  尝试使用 vue --version
  如果提示 “vue 不是内部命令”
  则需要找到vue的安装路径
  然后将安装路径添加至环境变量（系统变量/用户变量）
  重启终端，再次运行即可
- 构建项目：vue init webpack projName
    ? Project name c01-basic 项目名称（项目名称必须小写）
    ? Project description A Vue.js project 项目描述
    ? Author Li-HONGYAO <lihy_online@163.com> 项目作者
    ? Vue build standalone 
    ? Install vue-router? No 是否安装vue路由
    ? Use ESLint to lint your code? 是否使用ESLint 检测工具
    ? Set up unit tests No 是否使用单元测试
    ? Setup e2e tests with Nightwatch? No 使用使用e2e测试
    ? Should we run `npm install` for you after the project has been created? (recommended) npm
    - cd projName
    - npm run dev
# 目录结构

- README.md：说明文件
- .postcssrc.js：postcss 配置文件
- .gitignore：git 忽略
- .editorconfig：编辑相关配置
- .babelrc：babel 配置文件
- static：静态资源文件（图片/样式）
- src：源码文件
- config：项目相关配置文件（开发/生产/服务器相关）
- build：构建相关配置文件

# 初学 - 准备工作
- 清空 main.js 文件
- 删除 App.vue
- 删除 components 文件夹