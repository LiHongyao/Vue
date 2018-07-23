# 组件
- template：视图（只能有一个根视图）
- script：脚本
- style：样式 scoped（只在当前组件内生效）

# 使用组件
1. 引入组件 :
`import HelloWorld from './components/HelloWorld'`
2. 注册组件:
`components: { App }`
3. 使用组件
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </div>
</template>

# 组件交互
1. 父组件 -> 子组件：props 
   在父组件中调用子组件时通过设置属性进行数据传递
   在子组件中，通过props选项接收父组件设置的属性值

2. 子组件 -> 父组件：$emit(key, value)
   在父组件中，key作为自定义事件名称
   
    