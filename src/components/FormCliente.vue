<template>
    <v-form v-model="valid" v-on:submit.prevent="">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="user.firstName"
                        label="First Name"
                        type="text"
                        counter=40
                        :rules="[
                                    required('first name'), 
                                    minLength('first name',3), 
                                    maxLength('first name',40)
                                ]"
                        outlined
                        dense
                        color="#005598"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field
                        v-model="user.lastName"
                        label="Last Name"
                        type="text"
                        counter=40
                        :rules="[
                                    required('last name'), 
                                    minLength('first name',3), 
                                    maxLength('first name',40)
                                ]"
                        outlined
                        color="#005598"
                        dense
                    />
                </v-col>
                <v-col cols="12" md="12" center>
                    <v-text-field
                        v-model="user.telefono"
                        label="+58"
                        type="text"
                        append-icon="smartphone"
                        counter=10
                        :rules="[
                                    required('telefono'), 
                                    minLength('telefono',10), 
                                    maxLength('telefono',10),
                                    
                                ]"
                        outlined
                        color="#005598"
                        dense
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <v-autocomplete 
                        v-model="user.ciudad"
                        :items="items" 
                        item-text="item" 
                        chips 
                        deletable-chips
                        append-icon="room"
                        label="Ciudad"
                        outlined
                        dense
                        color="#005598"
                        :rules="[required('ciudad'),]"
                    /> 
                </v-col>
                <v-col cols="12" md="5" offset="1">
                    <v-radio-group 
                        v-model="user.sexo" 
                        :mandatory="false"
                        :rules="[required('sexo')]"
                        prepend-icon="wc"
                        color="#005598"
                        dense
                    >
                        <v-radio label="Femenino" value="Femenino"></v-radio>
                        <v-radio label="Masculino" value="Masculino"></v-radio>
                    </v-radio-group>
                </v-col>
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
                <v-col cols="12" md="12">
                    <v-checkbox 
                        color="#005598"
                        v-model="terminos" 
                        label="I agree to the terms ands conditions and privacy policy"
                        :rules="[v => !!v || 'debe estar de acuerdo para continuar!']"
                    />
                </v-col>
                <v-col>
                    <v-btn block :disabled="!valid" class="whi"> 
                        Enviar
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider class="my-8"/>
            <v-row>
                <v-col cols="12" md="6">
                    <v-btn color="#3b5998" dark>
                        Facebook
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
import validations from '@/validations/validations';

    export default {
        data(){
            return {
                valid:false,
                showPassword:false,
                terminos:false,
                user:{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    telefono:'',
                    sexo:'',
                    logeado:false,
                    ciudad:''
                },
                ...validations,

                items:['Anzoategui','bolivar','Nueva Esparta','Sucre']
            }
        },
        
    }
</script>

<style scoped>
    .whi{
        color:white!important;
        background: #005598 !important;
    }
</style>