<template>
    <div>
    <v-slide-group
      v-model="model"
      class="pa-4"
     
      show-arrows
    >
      <v-slide-item
        v-for="producto in productos"
        :key="producto"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          color="grey lighten-1"
          class="ma-4"
          height="200"
          width="200"
          @click="modalProducto=true"
          
          
        >
        <ModalProducto  />
       
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
           <v-img
      class="white--text align-end"
      height="200px"
      :src="producto.img"
    >
      <v-card-title>{{producto.precio}}</v-card-title>
      <v-card-subtitle class="pb-2">{{producto.nombre}}</v-card-subtitle>
    </v-img>

    
           
          </v-row>
        </v-card>
      </v-slide-item>


      
    </v-slide-group>
   
  
    </div>

    
 
</template>
<script>
import ModalProducto from "@/components/ModalProducto"
import {mapState} from 'vuex'

export default {
  components:{
   
  },
    props:['productos'],
   computed: {
     ...mapState(['modalProducto'])
   },
}
</script>