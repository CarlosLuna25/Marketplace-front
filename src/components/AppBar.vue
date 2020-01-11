<template>
  <v-app-bar app elevation="3" dark="" color="blue-grey darken-4">

    <BarraLateral :drawer="drawer"/>
    <v-app-bar-nav-icon @click="change()" />

    <v-toolbar-title class="headline mx-8">
      <v-btn text router to="/" >
        <v-img src="@/assets/LogoA.png" width="150"></v-img>
      </v-btn>
    </v-toolbar-title>

    <v-text-field 
      v-model="busquedas"
      label="Search store..."
      append-icon="search"
      color="#005598"
      hide-details
      outlined
      dense
      rounded
      v-on:keyup.enter="search"
    />

    <v-spacer />
    <v-divider vertical></v-divider>

    <v-toolbar-items>
      <v-btn text router to="/auth/login"
        v-if="auth && auth.logeado == undefined"
      >
        Iniciar sesión
      </v-btn>
    </v-toolbar-items>

    <LinksAuth />
  </v-app-bar>
</template>

<script>
import BarraLateral from '@/components/BarraLateral';
import LinksAuth from '@/components/LinksAuth';
import router from  '../router';
import {mapState, mapActions} from 'vuex';

    export default {
        components:{
            BarraLateral,
            LinksAuth
        },
        data(){
          return {
            model:'',
            drawer:false,
          }
        },
        computed: {
          ...mapState(['auth','busqueda']),
          busquedas:{
            get(){
              return this.busqueda.query;
            },
            set(val){
              this.setQuery(val)
            }
          }
        },
        methods:{
          ...mapActions(['setQuery','setTipo']),
          change(){
            if(this.drawer){
              this.drawer=false;
            }else{
              this.drawer=true;
            }
          },
          search(){
            router.push('/search');
          }
        }
    }
</script>
