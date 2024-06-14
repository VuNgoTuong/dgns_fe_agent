<template lang="">
    <!-- Loader starts-->
    <!-- <div class="loader-wrapper">
        <div class="theme-loader">
            <div class="loader-p"></div>
        </div>
    </div> -->
    <!-- Loader ends-->
    <div class="page-wrapper compact-wrapper" id="pageWrapper">
        <Header></Header>
        <div class="page-body-wrapper sidebar-icon">
            <Sidebar></Sidebar>
            <Content></Content>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>

import Init from '../../js/Init.js';
import Header from './components/layouts/Header.vue';
import Content from './components/layouts/Content.vue';
import Footer from './components/layouts/Footer.vue';
import Sidebar from './components/layouts/Sidebar.vue';
export default {
    mounted(){
        Init();
    },
    components : {Header,Footer,Content,Sidebar}
}
</script>
<style lang="">
    
</style>