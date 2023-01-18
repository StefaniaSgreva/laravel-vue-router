<template>
    <footer>
       <span>Designed by Stefania Sgreva</span>
    </footer>
</template>

<script>
    export default {
        name: 'AppFooter',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

    footer{
        background-color: $bg-color-mint;
        width: 100%;
        margin: 0 auto;
        height: 60px;
        text-align: center;
        @include dflex-center-col;
       
    }

</style>