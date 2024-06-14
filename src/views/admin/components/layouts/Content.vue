<template lang="">
    <div class="page-body">
        <!-- <div class="bg-danger position-absolute w-100 h-100 top-0 start-0" style="z-index:9">
            asd
        </div> -->
        <BreadCrumb></BreadCrumb>
        <div class="container-fluid dashboard-default-sec">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
import BreadCrumb from '../common/BreadCrumb.vue';
export default {
    components : {BreadCrumb}
}
</script>
<style lang="scss">
.slide-fade-enter-active {
    transition: all .5s ease-out;
}
.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}   
</style>