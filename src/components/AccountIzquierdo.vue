<template>
    <v-col cols="12" md="3">
        <v-card class="px-5 " elevation="0" height="200">
            <v-list dense>
                <v-list-item>
                    <img :src="auth.avatar" height="140"/> 
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        {{auth.firstName + ' ' + auth.lastName}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>  
        </v-card>

        <v-card elevation="0" class="mt-2">
            <v-list dense>
                <v-hover v-slot:default="{ hover }">
                    <v-list-item class="py-2" @click="ajustes">
                        <v-list-item-icon>
                            <v-icon :color="hover ? '#005598 ': null">
                                settings_applications
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <div :class=" hover ? 'aftim-color' : null ">
                                Ajustes de cuentas
                            </div>
                        </v-list-item-title>
                    </v-list-item>
                </v-hover>

                <v-divider/>

                <v-hover v-slot:default="{ hover }">
                    <v-list-item class="py-2" @click="credit">
                        <v-list-item-icon>
                            <v-icon :color="hover ? '#005598 ': null">
                                credit_card
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <div :class=" hover ? 'aftim-color' : null ">
                                Tarjeta de crédito
                            </div>
                        </v-list-item-title>
                    </v-list-item>
                </v-hover>
                        
                <v-divider/>

                <v-hover v-slot:default="{ hover }">
                    <v-list-item class="py-2" @click="credit">
                        <v-list-item-icon>
                            <v-icon :color="hover ? '#005598 ': null">
                                calendar_today
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <div :class=" hover ? 'aftim-color' : null ">
                                Ultimos pedidos
                            </div>
                        </v-list-item-title>
                    </v-list-item>
                </v-hover>

                <v-divider/>
                        
                <v-hover v-slot:default="{ hover }">
                    <v-list-item class="py-2" @click="ajustes">
                        <v-list-item-icon>
                            <v-icon :color="hover ? '#005598 ': null">
                                history
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <div :class=" hover ? 'aftim-color' : null ">
                                Centro de notificaciones
                            </div>
                        </v-list-item-title>
                    </v-list-item>
                </v-hover>

                <v-divider/>

                <v-hover v-slot:default="{ hover }">
                    <v-list-item class="py-2" @click="ajustes">
                        <v-list-item-icon>
                            <v-icon :color="hover ? '#005598 ': null">
                                help_outline
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            <div :class=" hover ? 'aftim-color' : null ">
                                Centro de ayuda
                            </div>
                        </v-list-item-title>
                    </v-list-item>
                </v-hover>
            </v-list>
        </v-card>
    </v-col>
</template>

<script>
import {mapState} from 'vuex';
import router from '../router';

    export default {
        computed: {
            ...mapState(['auth'])
        },
        methods:{
            ajustes(){
                router.push('/account/profile')
            },
            credit(){
                router.push('/account/credit-card')
            }
        }
    }
</script>

<style scoped>
    .aftim-color{
        color:#005598;
    }
</style>