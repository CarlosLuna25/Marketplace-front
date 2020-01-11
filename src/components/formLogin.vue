<template>
    <v-form v-model="valid" class="center" v-on:submit.prevent="loginAuth(user)">
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="user.email"
                        label="Email"
                        type="email"
                        :rules="[required('email'), emailFormat()]"
                        append-icon="email"
                        outlined
                        color="#005598"
                        dense
                    />
                </v-col>
                
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="user.password"
                        label="Password"
                        :type="showPassword ? 'text' : 'password' "
                        counter=true
                        :rules="[required('password'), minLength('password',8)]"
                        :append-icon="showPassword ?  'visibility' : 'visibility_off' "
                        @click:append="showPassword = !showPassword"
                        outlined
                        color="#005598"
                        dense
                    />
                </v-col>

                <v-col cols="12">
                    <v-btn 
                        block 
                        type="submit" 
                        :disabled="!valid" 
                        color="#005598"
                        :dark="valid"
                    >
                        Enviar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import validations from '@/validations/validations';

    export default {
        data() {
            return {
                showPassword:false,
                valid:false,
                user:{
                email:'',
                password:'',
                logeado:false
                },
                ...validations
            }
        },
        methods:{
            ...mapActions(['loginAuth'])
        }
    }
</script>