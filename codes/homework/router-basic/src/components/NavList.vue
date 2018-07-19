<template>
    <ul class="menu-list">
        <li>
            <router-link :to="urlData.home">HOME</router-link>
        </li>
        <li>
            <router-link :to="urlData.news">NEWS</router-link>
        </li>
        <li>
            <router-link :to="urlData.social">SOCIAL</router-link>
        </li>
        <li>
            <router-link :to="urlData.about">ABOUT</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: "NavList",
    data() {
        return {
            urlData: {
                home: '/',
                news: '/news',
                social: '/social',
                about: '/about'
            }
        }
    }
}
</script>

<style scoped>
.menu-list {
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
