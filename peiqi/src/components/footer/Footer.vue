<template>
    <div id="footer">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style>
#footer {
    width: 100%; 
    position: fixed;
    height: 1.08rem;
    bottom: 0;
    background:rgba(255,255,255,1);
    z-index: 5;
}

</style>
