<template>
    <div>
        <p>LazyLoad</p>
        <img v-lazy="imgObj"/>
    </div>
</template>
<script>
export default {
    name: 'LazyLoad',
    data() {
        return {
            imgObj: {
                src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532586092994&di=74a25fe6b59a745a907f40545d58e36c&imgtype=0&src=http%3A%2F%2Fimage.jijidown.com%2Fv1%2Fimage%3Fav%3D5490318%26url%3Dhttp%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F8adbe2398b2d76a782ec98ba2c1a31d18c8daed5.jpg%26sign%3DAB3BB39870C334F3166F9095D26071C0',
                error: require('../assets/error.jpeg'),
                loading: require('../assets/loading.gif')
            }
        }
    }
}
</script>
<style scoped>

</style>