<template>
    <div class="container">
        <NavigationBar :goback="true" />
        <div class="content">
            {{val}}
        </div>
    </div>
</template>
<script>
import NavigationBar from '../components/navigationbar'
export default {
    name: 'Details',
    data() {
        return {
            val: this.$route.params.msg
        }
    },
    components: {
        NavigationBar
    }
}
</script>

<style scoped>
.content {
    height: calc(100% - 64px);
}
</style>