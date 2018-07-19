<template>
  <div id="app">
    <!-- 路由导航/可单独设置成一个组件 -->
    <ul class="menu-list">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li><router-link :to="urlData.home">HOME</router-link></li>
      <li><router-link :to="urlData.news">NEWS</router-link></li>
      <li><router-link :to="urlData.social">SOCIAL</router-link></li>
      <li><router-link :to="urlData.about">ABOUT</router-link></li>
    </ul>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // 路由地址/动态设置便于统一管理
      urlData: {
        home  : '/',
        news  : '/news',
        social: '/social',
        about : '/about'
      }
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu-list {
  padding: 0;
  list-style: none;
  text-align: center;
}

.menu-list  li {
  display: inline-block;
  cursor: pointer;
}

.menu-list  li:hover {
  text-decoration: underline;
}
</style>
