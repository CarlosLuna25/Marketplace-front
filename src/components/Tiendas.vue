<template>
    <div class="my-5 mx-6">
        <div class="headline">
           {{title}}
        </div>
        <v-sheet
            class="mx-auto my-4"
            elevation="0"
            max-width="1100"
            color="#f5f5f5"
        >
            <v-slide-group
                v-model="model"
                class="pa-4"
                mandatory
                show-arrows
            >
                <v-slide-item
                    v-for="empresa in empresas"
                    :key="empresa.id"
                >
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                            :color="hover ? 'grey lighten-1' : '#ffffff'"
                            class="ma-2 pa-2"
                            height="200"
                            width="180"
                            elevation="0"
                            router :to="{name: 'aliados' , params:{id : empresa.tipo }}"
                        >
                            <v-img :src="empresa.avatar" height="150" width="150" />
                            <strong class="pa-3">{{empresa.tipo}}</strong>
                        </v-card>
                    </v-hover>
                </v-slide-item>
            </v-slide-group> 
        </v-sheet>
    </div>
</template>

<script>
    export default {
        props:['title', 'empresas'],
        data(){
            return {
                model: 1,
            }
        },
    }
</script>
