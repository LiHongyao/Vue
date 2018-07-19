<template>
    <div>
        <img v-lazy="imgObj"/>
    </div>
</template>

<script>
export default {
    name: 'lazy',
    data() {
        return {
            // 引入图片，如果实在js中，必须require进来
            imgObj: {
                src: 'http://img3.imgtn.bdimg.com/it/u=1827542756,2091998377&fm=27&gp=0.jpg',
                error: require('../assets/error.jpeg'),
                loading: require('../assets/loading.gif')
            }
        }
    }
}
</script>

<style scoped>

</style>
