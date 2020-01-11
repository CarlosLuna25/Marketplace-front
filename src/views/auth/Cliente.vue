<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="8">
                <v-card elevation="5" class="pa-5">
                    <v-container>
                        <v-row align="center">
                            <v-col cols="12">
                                <h6 class="font-weight-light headline">Registrate como cliente</h6>
                            </v-col>
                        </v-row>
                    </v-container>

                    <FormCliente />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FormCliente from '@/components/FormCliente';

    export default {

        components:{
            FormCliente,
        }
    }
</script>