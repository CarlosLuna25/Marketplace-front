<template>
  <div>
    <AppBar />
    <Banner class="mt-0" />
    <Tiendas title="¿Donde quieres comprar hoy?" :empresas="empre"/>
    <Tiendas title="¿Destacados?" :empresas="empresas"/>
    <Footer />
  </div>
</template>

<script>
import Tiendas from '@/components/Tiendas';
import AppBar from '@/components/AppBar';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Api from '@/services/Api';
import {mapState} from 'vuex';

  export default {
    name:'home',
    components:{
      Tiendas,
      AppBar,
      Footer,
      Banner
    },
    computed: {
      ...mapState(['empresas'])
    },
    data(){
      return {
        empre:[]
      }
    },
    mounted() {
      Api().get('/categorias').then((response) => {
        this.empre = response.data;
      });
    },
  }
</script>