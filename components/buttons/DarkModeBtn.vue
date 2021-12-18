<template>
    <div>
        <!-- @JARO TU WALCZYSZ Z DARK MODE BTN -->
        <button @click="toggleDarkMode">Toggle</button>
    </div>
</template>

<script>
    export default {
        mounted() {

        }, 
        methods: {
            toggleDarkMode() {
                const html = document.querySelector('html');
                html.classList.toggle('dark');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>