<template>
    <div>
        <AppBar />
        
        <div v-for="store in stores" :key="store.id">
            hola
        </div>
        {{busqueda}}
        <Footer />
    </div>
</template>

<script>
import AppBar from '@/components/AppBar';
import Footer from '@/components/Footer';
import {mapGetters,mapState} from 'vuex';

    export default {
        components:{
            AppBar,
            Footer
        },
        computed: {
            ...mapGetters({
                stores:'filteredStore',
            }),
            ...mapState(['busqueda'])
        },
    }
</script>