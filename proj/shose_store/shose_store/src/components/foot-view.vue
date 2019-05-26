<template>
  <div class="tabBar">
    <router-link exact class="tabBar-item" :to="links.home">
      <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
      <span>在线商城</span>
    </router-link>
    <router-link class="tabBar-item" :to="links.search">
      <font-awesome-icon :icon="['fas', 'search']"></font-awesome-icon>
      <span>搜索</span>
    </router-link>
    <router-link class="tabBar-item" :to="links.shoppingcart">
      <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
      <span>购物车</span>
    </router-link>
    <router-link class="tabBar-item" :to="links.mine">
      <font-awesome-icon :icon="['fas', 'user']"></font-awesome-icon>
      <span>个人中心</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FootView",
  data() {
    return {
      links: {
        home: "/",
        search: "/search",
        shoppingcart: "/shoppingcart",
        mine: "/mine"
      }
    };
  }
};
</script>

<style scoped>
.tabBar {
  height: 49px;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabBar-item {
  display: block;
  width: 25%;
  height: 100%;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #444444;
}
.tabBar-item.router-link-active {
    color: blueviolet;
}
</style>
