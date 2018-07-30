<template>
  <div id="app">
    <NavList />
    <router-view/>
  </div>
</template>

<script>

import NavList from './components/nav-list'

export default {
  name: 'App',
  components: {
    NavList
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
</style>
