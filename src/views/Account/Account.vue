<template>
    <div>
        <AppBar />
        <AccountOpciones />
        <Footer />
    </div>
</template>

<script>
import AppBar from '@/components/AppBar';
import Footer from '@/components/Footer';
import AccountOpciones from '@/components/AccountOpciones';

    export default {
        components:{
            AppBar,
            Footer,
            AccountOpciones
        },
        beforeUpdate() {
            console.log('actualizado');
        },
    }
</script>
