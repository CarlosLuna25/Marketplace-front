
<template>
    <div>
        <v-row class="mx-2 mt-5">
            <v-col cols="6" md="3">
                <v-card color="primary" height="200" width="300">
asdasdasdasd
                </v-card>
            </v-col>
             <v-col cols="6"  md="3">
                 <v-card color="primary" height="200" width="300">
                        asdasdasdasd
                </v-card>
            </v-col>
             <v-col cols="6" sm="6" md="3">
                 <v-card color="primary" height="200" width="300">
asdsadasd
                </v-card>
            </v-col>
             <v-col cols="6" md="3">
                 <v-card color="primary" height="200" width="300">
asdasdasdsad
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import CardGraphic from '@/components/vistaAdmin/CardGraphic'

    export default {
        components:{
            CardGraphic,
        },
        data(){
            return{
                labels: ['L','M','M','J','V','S','D',],
                value:[100,300,600,310,460,0,400],
                labels1: ['12am','3am','6am','9am','12pm','3pm','6pm','9pm',],
                value1: [200,675,410,390,310,460,250,240,],
                value2: [423,446,675,510,590,610,7,500,1100,2000]
            }
        },
    }
</script>
