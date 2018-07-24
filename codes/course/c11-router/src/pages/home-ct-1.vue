<template>
    <div class="home-ct">
        主页内容01
        <button type="button" @click='goAbout'>跳转至关于</button>
    </div>
</template>

<script>
export default {
    name:'HomeCt2',
    data() {
        return {
            
        }
    },
    methods: {
        goAbout() {
            this.$router.push({
                path: '/guanyu',
                query: {
                    weather: '成都-雷雨-20℃~36℃'
                }
            })
        }
    }
}
</script>

<style scoped>

</style>