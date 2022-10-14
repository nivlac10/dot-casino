<template>
    <section class="container">
        <h1 class="mb-6 text-2xl font-black uppercase">{{ gameTitle }}</h1>
        <iframe id="slot-game" src="https://ingametw.solidgaming.net/api/launch/MYSTINO/NE_BACCARAT?language=en&currency=USD&exiturl=https%3A%2F%2Fwww.mystino.jp" frameborder="0" scrolling="no">

        </iframe>
        
    </section>
    
</template>
<script>
    export default {
        data() {
            return {
                gameTitle: '',
            }
        },
       
        created() {
            this.gameTitle = this.$nuxt._route.params.title
        }
    }
</script>
<style lang="scss">
    #slot-game {
        display:block;
        width:100%;
        height: calc(100vh - 30px);
    }
</style>