<template>
<div>
     <Appbar/>
        <v-container>
             <v-layout row="" wrap="">
            <v-flex s12 md5 >
                <v-sheet  class="pa-3" width="300">
                <v-layout align-content-center="" > 

                    <v-card color="warning" class="pa-2">

                    <v-img src="../assets/Producto.png" contain="" width="280"></v-img>

                </v-card> 
                </v-layout>
                 <v-item-group mandatory>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="4"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="70"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class=" flex-grow-1 text-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
               </v-sheet>
            </v-flex>
             <v-flex s12 md7 >
                <v-card color="warning"></v-card>
            </v-flex>
        </v-layout>

        </v-container>
       



    <Footer/>
</div>
   
</template>
<script>
import Appbar from '@/components/AppBar'
import Footer from '@/components/Footer'
export default {
    
components:{
    Appbar, Footer,
}




}
</script>