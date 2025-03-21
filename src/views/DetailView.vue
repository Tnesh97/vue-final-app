<template>
    <div class="p-4">
        <h1>This is View Page {{ $route.params.id }}</h1>
    </div>

</template>

<script>
export default {
    mounted(){
        console.log(this.$route.params.id)
        // bring out the data in UI
    }
}
</script>

<style>

</style>