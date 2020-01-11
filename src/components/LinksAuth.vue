<template>
    <div v-if="$vuetify.breakpoint.smAndUp">
        <v-menu
          :transition="transition()"
          bottom
          v-if="auth.logeado"
          open-on-hover 
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn icon class="mx-3" v-on="on">
              <v-icon size="30" color="">person</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <img :src="auth.avatar" alt="John" width="30" height="30">
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{auth.firstName + ' ' + auth.lastName}}</v-list-item-title>
                </v-list-item-content>

              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                
              <v-list-item @click="push">
                <v-list-item-title>
                  Ajustes de cuentas
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  Agregar tarjeta de credito
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  Centro de ayuda
                </v-list-item-title>
              </v-list-item>

              <v-divider/>

              <v-list-item @click="logout">
                <v-list-item-title >
                  Cerrar sesion
                </v-list-item-title>
              </v-list-item>
            </v-list>

          </v-card>
        </v-menu>

        <v-btn icon v-if="auth.logeado" class="mx-3">
          <v-icon size="30" >shopping_cart</v-icon>
        </v-btn>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
import router from '../router';

    export default {
      computed: {
        ...mapState(['auth']),
      },
      methods: {
        ...mapActions(['logout']),

        transition(){
          return "slide-y-transition"
        },
        push(){
          router.push('/account/profile');
        }
      },
    }
</script>