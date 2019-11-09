<template>
    <div class="header flex space-between">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center">1</slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
    
</template>
<script>
export default {
    name:"Header"
}

</script>
<style lang="">
    .header{
        width: 100%;
        height: .88rem;
        line-height: .88rem;
        padding: 0 .28rem;
        position: fixed;
        z-index: 10;
        top: 0;
    }
    .left, .right{
        height: 100%;
        width:1.5rem;
    }
   
</style>