<template>
  <v-row justify="center">
    <!-- Modal de producto//-->
    <v-dialog v-model="modalProducto" max-width="1200">
     
      <v-card width="1200">
         <v-layout class="ma-3 pa-4" row wrap="">
        <v-flex md4 class="text-center mt-2"> 
          <v-layout column="" wrap="" class="text-center" align-content-center="">
             <v-hover v-slot:default="{ hover }">
            <v-flex s12 md12  > <v-img src="@/assets/Producto.png" width="300" contain="">  <v-expand-transition>
              
          <div
            
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3  text-center"
            style="height: 100%;"
          >
            <v-btn style="opacity:1;"   class="light-blue darken-3" :class="{ 'show-btns': hover } "> <v-icon>add_shopping_cart
</v-icon > A;adir al carrito</v-btn>
          </div>
        </v-expand-transition>  </v-img> </v-flex> </v-hover>
            <v-flex s12 md12 class="py-2"><v-btn  large="" class="mt-5 light-blue lighten-4
">Ver mas detalles</v-btn></v-flex>
          </v-layout>
         
        
        </v-flex>
        <v-flex md8 >
          <v-card-title > <h2 style="font-size:24">{{productos[0].nombre}}         </h2>
          

           <v-spacer></v-spacer>
        <span class="text-right" >    <v-btn
          
         
          class="white--text ml-2 blue darken-4"
         
          light="" 
          right
          top
        >
          <v-icon>add_shopping_cart</v-icon>  AGREGAR AL CARRITO
        </v-btn></span></v-card-title>
        <v-card-subtitle class=" pl-5 " > <h3  class="justify ml-5" style="font-size:17">{{productos[0].precio}}</h3></v-card-subtitle>
         <div class=" pl-2 ">
           <a :to="{ name: 'aliados', params: { Id:'ASUS' }}" class="justify ml-3 subtitle" style="font-size:17">vendedor: asus</a>
         </div>
     
          
          <v-divider></v-divider>
          <v-card-text>
         
            <h3 class="">Descripcion del producto:</h3>
          <p class="justify ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non provident totam tempora nisi libero rerum quos dolorum vero est architecto? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum natus non unde quis blanditiis illo. Ducimus velit voluptatem eius cupiditate. </p>
          </v-card-text>
        <v-divider></v-divider>
       
        </v-flex>


      </v-layout>
        <v-layout align-content-end="">  <v-card-actions class="ml-auto" >  <v-spacer></v-spacer><v-btn text=""  @click="oculta_modal">close</v-btn></v-card-actions></v-layout>
           
      </v-card>
     
    </v-dialog>

    <!--fin de modal-->
  </v-row>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      boton:false,
    }
  },
  computed: {
    ...mapState(["modalProducto", 'productos'])
  },
  methods: {
    ...mapMutations(["oculta_modal"])
  },
  
};
</script>
<style >
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
 
  position: absolute;
  width: 100%;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>