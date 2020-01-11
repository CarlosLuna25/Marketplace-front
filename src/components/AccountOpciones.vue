<template>
    <v-layout class="ma-5 ">
        <v-row>
            <AccountIzquierdo />

            <v-col cols="12" md="9">
                <v-card width="800" height="500" elevation="0" class="pa-5">
                    <router-view />
                </v-card>
            </v-col>

        </v-row>
    </v-layout>
</template>

<script>
import {mapState} from 'vuex';
import AccountIzquierdo from '@/components/AccountIzquierdo';

    export default {
        components:{
            AccountIzquierdo
        },
        computed: {
            ...mapState(['auth'])
        },
    }
</script>

