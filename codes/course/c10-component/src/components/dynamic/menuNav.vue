<template>
    <ul class="menu-list">
        <li v-for="(title, index) in menus" :key="index" :data-page="title" @click="menuBtnClick">
            {{title | uppercase}}
        </li>
    </ul>
</template>
<script>

export default {
    name: 'MenuNav',
    filters: {
        uppercase(val) {
            return val.toUpperCase();
        }
    },
    methods: {
        menuBtnClick(e) {
            // 切换 -> data-page
            let page = e.target.dataset.page;
            this.$emit('menuClick', page);
        }
    },
    data() {
        return {
            menus: ['Home', 'News', 'Mine']
        }
    }
}
</script>

<style scoped>
.menu-list {
    list-style: none;
    padding: 0;
}
.menu-list {
    width: 500px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-list li {
    width: calc(100% / 3);
    height: 100%;
    background: purple;
    line-height: 35px;
    cursor: pointer;
    color: #fff;
}
</style>