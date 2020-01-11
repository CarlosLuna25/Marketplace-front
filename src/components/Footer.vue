<template>
   <v-sheet>
        <PreFooter />
        <v-divider />

        <v-layout row>
            <v-flex md3 xs12 align-self-baseline class="px-5 py-2">
                <v-list dense>
                    <h5 class="font-weight-bold">Categorias</h5>

                    <v-hover v-slot:default="{ hover }">
                        <v-list-item>
                            <v-subheader >
                                <div :class="hover ? 'aftim-color' : null">
                                    Tiendas
                                </div> 
                            </v-subheader>
                        </v-list-item>
                    </v-hover>

                    <v-hover v-slot:default="{ hover }">
                        <v-list-item>
                            <v-subheader >
                                <div :class="hover ? 'aftim-color' : null">
                                    Restaurantes
                                </div> 
                            </v-subheader>
                        </v-list-item>
                    </v-hover>

                    <v-hover v-slot:default="{ hover }">
                        <v-list-item>
                            <v-subheader >
                                <div :class="hover ? 'aftim-color' : null">
                                    Supermercados
                                </div> 
                            </v-subheader>
                        </v-list-item>
                    </v-hover>
                </v-list>
            </v-flex>

            <v-divider vertical/>

            <v-flex md5 xs12 align-self-baseline class="px-3 py-2">
                <v-list dense>
                    <h5 class="font-weight-bold">Información de interes</h5>
                    <v-hover v-slot:default="{ hover }">
                        <v-list-item>
                            <v-subheader >
                                <div :class="hover ? 'aftim-color' : null">
                                    Terminos y condiciones
                                </div> 
                            </v-subheader>
                        </v-list-item>
                    </v-hover>

                    <v-hover v-slot:default="{ hover }">
                        <v-list-item>
                            <v-subheader >
                                <div :class="hover ? 'aftim-color' : null">
                                    Trabaja con nosotros
                                </div> 
                            </v-subheader>
                        </v-list-item>
                    </v-hover>

                    <v-hover v-slot:default="{ hover }">
                        <v-list-item>
                            <v-subheader >
                                <div :class="hover ? 'aftim-color' : null">
                                    Politica de tratamientos de datos personales
                                </div> 
                            </v-subheader>
                        </v-list-item>
                    </v-hover>

                    <v-hover v-slot:default="{ hover }">
                        <v-list-item>
                            <v-subheader >
                                <div :class="hover ? 'aftim-color' : null">
                                    Preguntas frecuentes
                                </div> 
                            </v-subheader>
                        </v-list-item>
                    </v-hover>
                </v-list>
            </v-flex>

            <v-divider vertical/>

            <v-flex md3 xs12 class="px-3 py-2" align-self-baseline>
                <v-list dense>
                    <h5 class="font-weight-bold">Descarga la App</h5>

                    <v-list-item class="my-2">
                        <v-btn rounded text>
                            <v-img src="@/assets/app-store.png"/>
                            <v-list-item-title class="mx-2">iPhone</v-list-item-title>
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn rounded text>
                            <v-img src='@/assets/playstore.png'/>
                            <v-list-item-title class="mx-2">Android</v-list-item-title>
                            </v-btn>
                    </v-list-item>

                    <h5 class="font-weight-bold pa-5">Siguenos</h5>
                    <v-list-item>
                        <v-btn icon  class="mx-3">
                            <v-img :src="require('@/assets/svgfacebook.svg')" width="34" height="34"></v-img>
                        </v-btn>
                        <v-btn icon  class="mx-3">
                            <v-img :src="require('@/assets/svgyoutu.svg')" width="34" height="34"></v-img>
                        </v-btn>
                        <v-btn icon class="mx-3">
                            <v-img :src="require('@/assets/instagramsvg.svg')" width="34" height="34"></v-img>
                        </v-btn>
                    </v-list-item>

                </v-list>
            </v-flex>
        </v-layout>

        <SubFooter />
   </v-sheet>
</template>

<script>
import SubFooter from '@/components/SubFooter';
import PreFooter from '@/components/PreFooter';

    export default {
        components:{
            SubFooter,
            PreFooter
        }
    }
</script>

<style lang="scss" scoped>
    .border{
        border: 1px 1px 3px #005598;
    }
    .color{
        color: black !important;
    }

    .aftim-color{
        color:#005598;
    }
</style>