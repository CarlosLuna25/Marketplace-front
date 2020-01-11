<template>
    <div>
        <v-divider/>

        <v-layout row class="pa-8" wrap>
            <v-flex md4 xs12>
                <v-layout row justify-space-around>
                    <v-flex md3 align-self-center>
                        <v-img :src="require('@/assets/shop.svg')" width="64" height="64"/>
                    </v-flex>
                    <v-flex md6 align-self-center>
                        Pagos Online
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex md4 xs12>
                <v-layout row justify-space-around>
                    <v-flex md3>
                        <v-img :src="require('@/assets/delivery.svg')" width="64" height="64"/>
                    </v-flex>
                    <v-flex md6 align-self-center>
                        Envios a toda hora
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex md4 xs12>
                <v-layout row justify-space-around>
                    <v-flex md3>
                        <v-img :src="require('@/assets/seguridad.svg')" width="64" height="64"/>
                    </v-flex>
                    <v-flex md6 align-self-center>
                        Privacidad garantizada
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<style scoped>
    .border{
        border: 1px solid #e0e0e0;
        border-radius: 10%;
    }
</style>