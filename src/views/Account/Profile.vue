<template>
    <div>
        <div class="subtitle-1 font-weight-medium">Información de tu cuenta</div>
        <v-layout class="ma-5">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="name"
                        label="Nombre(s)"
                        type="text"
                        counter=40
                        :rules="[
                                required('first name'), 
                                minLength('first name',3), 
                                maxLength('first name',40)
                            ]"
                        dense
                        color="#005598"
                        append-icon="create"
                        :disabled="update"
                        @click:append="update= !update"
                    />
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="apellido"
                        label="Apellido(s)"
                        type="text"
                        counter=40
                        :rules="[
                                required('first name'), 
                                minLength('first name',3), 
                                maxLength('first name',40)
                            ]"
                        dense
                        color="#005598"
                        append-icon="create"
                        :disabled="update"
                        @click:append="update= !update"
                    />
                </v-col>
                <v-col cols="12" md="2" v-if="update">
                    <v-btn>hola</v-btn>
                </v-col>
            </v-row>
        </v-layout>
    </div>
</template>

<script>
import validations from '@/validations/validations';
import {mapState} from 'vuex';

    export default {
        data(){
           return{
               ...validations,
               name:'',
               apellido:'',
               update:false
           }
        },
        computed: {
            ...mapState(['auth'])
        },
        mounted() {
            this.name = this.auth.firstName;
            this.apellido = this.auth.lastName;
        },

    }
</script>

