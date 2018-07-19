<template>
    <div>
        <p>师资：</p>
        <p>{{$route.params.name}} - {{$route.params.course}}</p>
    </div>
</template>

<script>
export default {
    name: 'teachers',
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>