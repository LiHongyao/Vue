<template>
    <div class="tabBar">
        <!-- 游标 -->
        <div class="cursor" :style="{'left':this.$store.state.left}"></div>
        <!-- 菜单项 -->
        <ul class="tabBar-list">
            <li class="item" v-for="(link, index) in links" :key="index">
                <Icon class="icon" :type="types[index]" size="25" color="#fff" ></Icon>
                <router-link :to="link.href">
                    {{link.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {
            types: [
                'ios-home',
                'ios-search-strong',
                'ios-cart',
                'ios-person'
            ],
            links: [
                {title: '主页', href: '/'},
                {title: '搜索', href: '/search'},
                {title: '购物车', href: '/shoppingcar'},
                {title: '我的', href: '/mine'},
            ]
        }
    }
}
</script>

<style scoped>
.tabBar {
    height: 49px;
    position: relative;
    background: #333;
}
.cursor {
    width: 25%;
    height: 49px;
    transition: left .25s linear;
    position: absolute;
    top: 0;
    background: purple;
}
.tabBar-list .item {
    width: 25%;
    height: 49px;
    float: left;
    background: transparent;
    position: relative;
    cursor: pointer;
    padding: 3px 0;
}
.tabBar-list .item a {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 11px;
    position: relative;
    z-index: 1;
}

.tabBar-list .item .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}


</style>
