<template>
  <div>
    <AppBar />
    <Aliado/>

    <router-view></router-view>

    <Footer />
  </div>
</template>
<script>
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";

import Aliado from "@/components/Aliado"
export default {
  components: {
    AppBar,
    Footer,
    Aliado
  },
 
  
};
</script>
