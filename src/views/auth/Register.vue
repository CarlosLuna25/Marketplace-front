<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" align="center" justify="center">
          <h1>Bienvenido a Aftim</h1>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row align="center">
        <v-col cols="12" md="12">
          <v-tabs color="#005598" background-color="#f5f5f5" centered>
            <v-tab router to="/auth/register/cliente">Persona</v-tab>
            <v-tab router to="/auth/register/empresa">Compañia</v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <router-view />
    </v-container>

    <SubFooter />

  </div>
</template>

<script>
import SubFooter from '@/components/SubFooter';

  export default {
    components:{
      SubFooter
    }
  }
</script>