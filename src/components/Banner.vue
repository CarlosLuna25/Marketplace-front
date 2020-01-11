<template>
    <v-layout class="p-0 m-0">
       
          <v-carousel 
          cycle="true"
          height="240"
          hide-delimiter-background

          >
   
     <v-carousel-item
     
    >
     
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
           <v-img contain=""
            :src="require('@/assets/COMIDA.jpg')"
          
           aria-placeholder="asdasdasda"
           width="100%"
           
        >
     
        </v-img>
        </v-row>
     
    </v-carousel-item>
     <v-carousel-item
     
    >
     
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
           <v-img 
           contain=""
            :src="require('@/assets/FARMACIA.jpg')"
         
           aria-placeholder="asdasdasda"
        >
     
        </v-img>
        </v-row>
     
    </v-carousel-item>
     <v-carousel-item
     
    >
     
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
           <v-img contain=""
            :src="require('@/assets/SPORT.jpg')"
           
           aria-placeholder="asdasdasda"
        >
     
        </v-img>
        </v-row>
     
    </v-carousel-item>
    
  </v-carousel>
    </v-layout>
</template>
<script>
  export default {
    data () {
      return {
          img:[
              "@/assets/home.jpg",
              "@/assets/home1.jpg",
              "@/assets/home2.png",
              "'@/assets/home3.jpg",
          ],
        
      }
    },
  }
</script>
<style >
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
 
  position: absolute;
  width: 100%;
}
</style>