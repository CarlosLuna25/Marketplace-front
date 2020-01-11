<template>
  <div>
    <v-layout row wrap="" class="">
        <!-- tienda y categorias-->
        <v-flex md3 class="ma-5"  > <v-card class="px-5 " elevation="0" height="200">
            <v-list dense>
              <v-list-item class="">
                 <v-avatar size="100"> <img src="https://cdn.worldvectorlogo.com/logos/nur-die.svg" alt="Avatar empresa" height="140" class="circle"/> </v-avatar>
                
                    <v-spacer></v-spacer>   {{$route.params.id}} nombre de tienda
                    
                                 
                </v-list-item>
            </v-list>  
        </v-card> 
        <!--categorias-->
        <v-card>
           <v-list elevation="0" v-for="item in categorias"
          :key="item"

          >
        <v-list-item
         link
        >
         
          <v-list-item-content>
              
            <v-list-item-title class="headline text-center" > {{ item.titulo }}  </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon large left="">{{ item.icon }}</v-icon>
          </v-list-item-icon>

         

        </v-list-item>
 <v-divider></v-divider>
      </v-list>
        </v-card>
        
        </v-flex>
        <!--carrusel de productos segun categorias-->
        <v-flex md8 class="ma-5 ">
          <v-layout class="text-center">
            <v-flex s12 class="text-center">
              <v-card v-for="item in categorias" :key="item.titulo" class="mt-3">
            <v-card-title class="headline">{{item.titulo}}</v-card-title>
           <CarruselCategorias :productos="productos"/>

          </v-card> 
            </v-flex>
            
           
          </v-layout>
          
        </v-flex>
    </v-layout>
  </div>
</template>
<script>
import CarruselCategorias from "@/components/CarruselCategorias"
import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  components:{
    CarruselCategorias,
  },
  data() {
    return {
      
     categorias:[{titulo:'ofertas', icon:'money_off'},{titulo:'categoria1',icon:'arrow_right'},{titulo:'categoria1',icon:'arrow_right'},{titulo:'categoria1',icon:'arrow_right'},{titulo:'categoria1',icon:'arrow_right'}]
    };
  },
  computed: {
    ...mapState(['productos'])
  },
  methods: {
    ...mapMutations["Get_Aliado_ID"],

  },
  created() {

  }
};
</script>
