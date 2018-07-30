<template>
    <div class="container">
        <NavigationBar />
        <div class="content">
            <Input class="input" v-model="val" placeholder="Enter something..." clearable style="width: 200px" />
            <Button @click="goDetails">前往详情页</Button>
        </div>
        <TabBar />
    </div>
</template>
<script>
import NavigationBar from '../components/navigationbar'
import TabBar from '../components/tabbar'

export default {
    name: 'Home',
    data() {
        return {
            val: '本来无一物，何处惹尘埃'
        }
    },
    components: {
        NavigationBar,
        TabBar
    },
    methods: {
        goDetails() {
            // 进入详情页
            this.$router.push({
                name: 'details',
                params: {msg: this.val}
            });
        }
    }
}
</script>

<style scoped>
.content {
    text-align: center;
}
.input {
    display: block;
    margin: 25px auto;
}
</style>