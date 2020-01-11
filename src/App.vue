<template>
  <v-app style="background-color:#f5f5f5;">

    <v-content>
      <router-view/>

    </v-content>
    

  </v-app>
</template>

<script>
import {mapActions} from 'vuex';
import ModalProducto from "@/components/ModalProducto"
  export default {
    name: 'App',
    components:{
      ModalProducto
    },
    methods: {
      ...mapActions(['cargarAuth'])
    },
    mounted() {
      this.cargarAuth();
    },
  }
</script>
