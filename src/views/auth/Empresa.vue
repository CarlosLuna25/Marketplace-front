<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="12" md="9">
                <v-sheet elevation="5">
                    <FormEmpresa />
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import FormEmpresa from '@/components/FormEmpresa'

    export default {
        components:{
            FormEmpresa
        }
    }   
</script>
