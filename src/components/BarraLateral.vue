<template>
    <v-navigation-drawer 
      app
      v-model="drawer" 
      hide-overlay
      :transition="transition()"
      clipped
      style="margin-top:65px;"
    >
      <v-list dense open-on-hover right offset-x>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>
      <v-divider></v-divider>

    </v-navigation-drawer>
</template>

<script>
import {mapState} from 'vuex';

    export default {
        name: 'BarraLateral',
        props:['drawer'],
        computed: {
          ...mapState(['items']),
        },
        methods:{
            transition(){
                if(this.drawer){
                    return "slide-x-transition";
                }else{
                    return "slide-y-transition";
                }
            }
        }
    }
</script>
