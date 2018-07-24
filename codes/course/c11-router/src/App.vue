<template>
  <div id="app">
    <MenuNav />
    <router-view />
    <router-view name='a'/>
    <router-view name='b'/>
  </div>
</template>

<script>

import MenuNav from './components/menu-nav'

export default {
  name: 'App',
  components: {
    MenuNav
  },
  watch: {
    // 监听路由变化
    $route(to, from) {
      // to - from -> 路由对象
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
}

.active {
  background: red;
}
</style>
