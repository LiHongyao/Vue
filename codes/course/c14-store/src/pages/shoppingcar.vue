<template>
    <div class="container">
        <NavigationBar />
        <div class="content">购物车</div>
        <TabBar />
    </div>
</template>
<script>
import NavigationBar from '../components/navigationbar'
import TabBar from '../components/tabbar'
export default {
    name: 'ShoppingCar',
    data() {
        return {}
    },
    components: {
        NavigationBar,
        TabBar
    }
}
</script>

<style scoped>

</style>
