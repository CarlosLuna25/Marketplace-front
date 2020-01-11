<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6" >
          <v-card elevation="5" class="pa-5">

            <v-container>
              <v-row >
                <v-col cols="12" align="center" justify="center">
                  <h6 class="display-2 font-weight-light">
                    Aftim
                  </h6>
                </v-col>
              </v-row>
            </v-container>

            <formLogin />

             <v-container>
              <v-row>
                <v-col cols="12" align="center" justify="center">
                  <h5>¿es tu primera vez en Aftim? 
                    <strong> 
                      <router-link to="/auth/register/cliente">
                        crea una cuenta
                      </router-link>
                    </strong>
                  </h5>
                </v-col>
              </v-row>
            </v-container>
            
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <SubFooter />
  </div>
</template>

<script>
import formLogin from '@/components/formLogin';
import SubFooter from '@/components/SubFooter';

  export default {
    components:{
      formLogin,
      SubFooter
    }
  }
</script>