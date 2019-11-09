<template>
    <div class="hello">
        <h1>这个是hello页面，穿过的参数是{{$route.params.hparam1}}</h1>
        <h2></h2>
    </div>
</template>
<script>
    export default {
        name:'hello',
        data() {
            return {
                msg:'this is hello 页面'
            }
        },
    }
</script>